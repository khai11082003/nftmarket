// import type { NFT as NFTType } from '@thirdweb-dev/sdk'
// import Link from "next/link";
import React from 'react'
import { NFT_COLLECTION_ADDRESS } from '../../const/contractAddresses'
import Skeleton from '../Skeleton/Skeleton'
// import NFT from './NFT'
import styles from '../../styles/Buy.module.css'
import { NFTType } from '../../fakeNFT'
import NFTComponent from './NFT'

type Props = {
  isLoading: boolean
  data?: NFTType[] | undefined
}

export default function NFTGrid ({ isLoading, data }: Props) {
  return (
    <div className={styles.nftGridContainer}>
      {isLoading ? (
        [...Array(20)].map((_, index) => (
          <div key={index} className={styles.nftContainer}>
            <Skeleton key={index} width={'100%'} height='312px' />
          </div>
        ))
      ) : data && data.length > 0 ? (
        data.map(nft =>
          false ? (
            <div
              ref={`/token/${NFT_COLLECTION_ADDRESS}/${nft.id}`}
              key={nft.id}
              className={styles.nftContainer}
            >
              <NFTComponent />
            </div>
          ) : (
            <div key={nft.id} className={styles.nftContainer}>
              <NFTComponent />
            </div>
          )
        )
      ) : (
        <p>kailaai</p>
      )}
    </div>
  )
}
