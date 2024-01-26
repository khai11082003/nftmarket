import React, { FC } from 'react'

interface IconSvgProps {
  name: string
  size?: string
}

const IconSvg: FC<IconSvgProps> = ({ name, size }) => {
  switch (name) {
    case 'logo':
      return (
        <svg
          style={{
            marginTop: '8px'
          }}
          width='50'
          height='42'
          viewBox='0 0 50 42'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_2459_747)'>
            <path
              d='M37.3141 33.75H12.6606C11.1902 33.75 9.61288 32.587 9.13556 31.1508L4.13738 16.0992C3.66005 14.663 4.46657 13.5 5.93694 13.5H30.5904C32.0608 13.5 33.6382 14.663 34.1155 16.0992L39.1137 31.1508C39.5882 32.587 38.7845 33.75 37.3141 33.75Z'
              fill='#C26028'
            />
            <path
              opacity='0.9'
              d='M40.3131 27H15.6604C14.19 27 12.6127 25.837 12.1354 24.4008L7.13737 9.34924C6.66006 7.91296 7.46655 6.75 8.93688 6.75H33.5896C35.06 6.75 36.6373 7.91296 37.1146 9.34924L42.1126 24.4008C42.5899 25.8344 41.7834 27 40.3131 27Z'
              fill='#EEC141'
            />
            <path
              opacity='0.9'
              d='M44.1043 20.25H19.9761C18.5371 20.25 16.9933 19.087 16.5261 17.6508L11.6345 2.59925C11.1673 1.16296 11.9566 0 13.3957 0H37.5239C38.963 0 40.5067 1.16296 40.9739 2.59925L45.8656 17.6508C46.3327 19.087 45.5434 20.25 44.1043 20.25Z'
              fill='#EEC141'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_2459_747'
              x='0'
              y='0'
              width='50'
              height='41.75'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_2459_747'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_2459_747'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      )
    case 'findIcon':
      return (
        <svg
          width={size}
          height={size}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M39.4958 37.1186L28.0193 25.6338C30.2818 22.9204 31.6426 19.4528 31.6426 15.6655C31.6426 7.02531 24.5517 0 15.8295 0C7.10729 0 0 7.03351 0 15.6737C0 24.314 7.09089 31.3393 15.8131 31.3393C19.5184 31.3393 22.9286 30.0687 25.6338 27.9455L37.1514 39.4631C37.8236 40.1353 38.8237 40.1353 39.4958 39.4631C40.1681 38.7909 40.1681 37.7908 39.4958 37.1186ZM3.361 15.6737C3.361 8.88616 8.95174 3.3692 15.8131 3.3692C22.6745 3.3692 28.2652 8.88616 28.2652 15.6737C28.2652 22.4613 22.6745 27.9783 15.8131 27.9783C8.95174 27.9783 3.361 22.4531 3.361 15.6737Z'
            fill='white'
          />
        </svg>
      )

    default:
      return null
  }
}

export default IconSvg
