import { useEffect, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { multicallv2 } from 'utils/multicall'
import profileABI from 'config/abi/anpansProfile.json'
import { getAnpansProfileAddress } from 'utils/addressHelpers'
import useToast from 'hooks/useToast'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const [costs, setCosts] = useState({
    numberAnpanToReactivate: BIG_ZERO,
    numberAnpanToRegister: BIG_ZERO,
    numberAnpanToUpdate: BIG_ZERO,
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const calls = ['numberAnpanToReactivate', 'numberAnpanToRegister', 'numberAnpanToUpdate'].map((method) => ({
          address: getAnpansProfileAddress(),
          name: method,
        }))
        const [[numberAnpanToReactivate], [numberAnpanToRegister], [numberAnpanToUpdate]] = await multicallv2(
          profileABI,
          calls,
        )

        setCosts({
          numberAnpanToReactivate: new BigNumber(numberAnpanToReactivate.toString()),
          numberAnpanToRegister: new BigNumber(numberAnpanToRegister.toString()),
          numberAnpanToUpdate: new BigNumber(numberAnpanToUpdate.toString()),
        })
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve ANPAN costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t])

  return costs
}

export default useGetProfileCosts
