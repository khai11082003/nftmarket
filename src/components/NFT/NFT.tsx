import React from 'react'
import styles from './NFT.module.css'
import { Link } from 'react-router-dom'
export default function NFTComponent () {
  return (
    <>
      <Link to='/detail'>
        {' '}
        {/* Thay thế ThirdwebNftMedia bằng một hình ảnh giả mạo */}
        <img src='logo192.png' className={styles.nftImage} />
        <p className={styles.nftTokenId}>Token ID #1</p>
        <p className={styles.nftName}>Circle</p>
        <div className={styles.priceContainer}>
          {true ? (
            <div className={styles.nftPriceContainer}>
              <div>
                <p className={styles.nftPriceLabel}>Price</p>
                <p className={styles.nftPriceValue}>done</p>
              </div>
            </div>
          ) : true ? (
            <div className={styles.nftPriceContainer}>
              <div>
                <p className={styles.nftPriceLabel}>Minimum Bid</p>
                <p className={styles.nftPriceValue}>done</p>
              </div>
            </div>
          ) : (
            <div className={styles.nftPriceContainer}>
              <div>
                <p className={styles.nftPriceLabel}>Price</p>
                <p className={styles.nftPriceValue}>Not for sale</p>
              </div>
            </div>
          )}
        </div>
      </Link>
    </>
  )
}
