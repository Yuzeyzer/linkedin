import React from 'react';

export const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: (
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M16.5 7.0875L9.6375 2.445C9.44918 2.31793 9.22718 2.25003 9 2.25C8.77517 2.25014 8.5556 2.3181 8.37 2.445L1.5 7.0875L2.295 8.25L3 7.7775V15C3 15.1989 3.07902 15.3897 3.21967 15.5303C3.36032 15.671 3.55109 15.75 3.75 15.75H7.5V12H10.5V15.75H14.25C14.4489 15.75 14.6397 15.671 14.7803 15.5303C14.921 15.3897 15 15.1989 15 15V7.7775L15.705 8.25L16.5 7.0875Z'
          fill='#8496ab'
        />
        <path
          d='M16.5 7.0875L9.6375 2.445C9.45069 2.31764 9.22985 2.24951 9.00375 2.24951C8.77766 2.24951 8.55681 2.31764 8.37 2.445L1.5 7.0875L2.295 8.25L3 7.7775V15C3 15.1989 3.07902 15.3897 3.21967 15.5303C3.36032 15.671 3.55109 15.75 3.75 15.75H8.25V12H9.75V15.75H14.25C14.4489 15.75 14.6397 15.671 14.7803 15.5303C14.921 15.3897 15 15.1989 15 15V7.7775L15.705 8.25L16.5 7.0875ZM13.5 14.25H11.25V11.25C11.25 11.0511 11.171 10.8603 11.0303 10.7197C10.8897 10.579 10.6989 10.5 10.5 10.5H7.5C7.30109 10.5 7.11032 10.579 6.96967 10.7197C6.82902 10.8603 6.75 11.0511 6.75 11.25V14.25H4.5V6.6675L9 3.6675L13.5 6.6675V14.25Z'
          fill='#8496ab'
        />
      </svg>
    ),
  },
  {
    name: 'My Network',
    link: '/network',
    icon: (
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clip-path='url(#clip0)'>
          <path
            d='M12 13.3875V15C12 15.1989 11.921 15.3897 11.7803 15.5303C11.6397 15.671 11.4489 15.75 11.25 15.75H0.75C0.551088 15.75 0.360323 15.671 0.21967 15.5303C0.079018 15.3897 3.99857e-07 15.1989 3.99857e-07 15V13.3875C-0.000311746 12.7828 0.182139 12.1921 0.523427 11.6929C0.864715 11.1937 1.3489 10.8092 1.9125 10.59L4.125 9.69001V8.78252L3.5775 7.80752C3.19896 7.13426 3.00008 6.3749 3 5.60251V4.50001C2.998 4.08018 3.08414 3.6646 3.25286 3.28015C3.42157 2.89571 3.6691 2.55095 3.97943 2.26819C4.28977 1.98542 4.656 1.77094 5.05444 1.63862C5.45288 1.50629 5.87466 1.45908 6.2925 1.50001C7.05584 1.5949 7.75634 1.97108 8.25705 2.55501C8.75776 3.13894 9.02268 3.88864 9 4.65751V5.60251C8.99992 6.3749 8.80104 7.13426 8.4225 7.80752L7.875 8.78252V9.69001L10.0875 10.59C10.6511 10.8092 11.1353 11.1937 11.4766 11.6929C11.8179 12.1921 12.0003 12.7828 12 13.3875ZM15.5625 10.65L14.25 10.1475V9.39751C14.7382 8.66154 14.999 7.79818 15 6.91501V6.75001C15 6.15328 14.7629 5.58098 14.341 5.15902C13.919 4.73707 13.3467 4.50001 12.75 4.50001C12.1533 4.50001 11.581 4.73707 11.159 5.15902C10.7371 5.58098 10.5 6.15328 10.5 6.75001V6.88502C10.5063 7.55606 10.6626 8.2172 10.9575 8.82001C11.2177 9.21587 11.5771 9.53655 12 9.75002C12.4511 9.97574 12.8303 10.3227 13.0953 10.7519C13.3602 11.1811 13.5004 11.6756 13.5 12.18V15.75H16.5C16.6989 15.75 16.8897 15.671 17.0303 15.5303C17.171 15.3897 17.25 15.1989 17.25 15V13.1025C17.2501 12.5709 17.0889 12.0518 16.7875 11.6139C16.4862 11.176 16.059 10.8399 15.5625 10.65Z'
            fill='#8496A8'
          />
          <path
            d='M15.555 10.65L14.25 10.155V9.645L14.4375 9.3375C14.8047 8.74505 14.9995 8.062 15 7.365V6.75C15 6.15326 14.7629 5.58097 14.341 5.15901C13.919 4.73705 13.3467 4.5 12.75 4.5C12.1533 4.5 11.581 4.73705 11.159 5.15901C10.7371 5.58097 10.5 6.15326 10.5 6.75V7.365C10.5005 8.062 10.6953 8.74505 11.0625 9.3375L11.25 9.645V10.155L10.5 10.4325C10.3609 10.3509 10.2154 10.2807 10.065 10.2225L8.2275 9.4725V8.1225C8.72203 7.24502 8.98769 6.25716 9 5.25V4.5C9 3.70435 8.68393 2.94129 8.12132 2.37868C7.55871 1.81607 6.79565 1.5 6 1.5C5.20435 1.5 4.44129 1.81607 3.87868 2.37868C3.31607 2.94129 3 3.70435 3 4.5V5.25C3.00165 6.26283 3.25966 7.25877 3.75 8.145V9.525L1.9125 10.275C1.35833 10.4904 0.880663 10.8656 0.540149 11.353C0.199634 11.8405 0.0116287 12.418 0 13.0125L0 15C0 15.1989 0.0790176 15.3897 0.21967 15.5303C0.360322 15.671 0.551088 15.75 0.75 15.75H16.5C16.6989 15.75 16.8897 15.671 17.0303 15.5303C17.171 15.3897 17.25 15.1989 17.25 15V13.1025C17.2495 12.57 17.0872 12.0503 16.7844 11.6123C16.4817 11.1742 16.0529 10.8386 15.555 10.65ZM12 6.5625C12 6.36359 12.079 6.17282 12.2197 6.03217C12.3603 5.89152 12.5511 5.8125 12.75 5.8125C12.9489 5.8125 13.1397 5.89152 13.2803 6.03217C13.421 6.17282 13.5 6.36359 13.5 6.5625V7.6425C13.4998 8.02582 13.4017 8.40274 13.215 8.7375L12.9675 9.1875C12.9513 9.21709 12.9274 9.24177 12.8984 9.25892C12.8694 9.27608 12.8362 9.28509 12.8025 9.285H12.6975C12.6638 9.28509 12.6306 9.27608 12.6016 9.25892C12.5726 9.24177 12.5487 9.21709 12.5325 9.1875L12.285 8.7375C12.0983 8.40274 12.0002 8.02582 12 7.6425V6.5625ZM4.5 4.3875C4.5 3.98968 4.65804 3.60814 4.93934 3.32684C5.22064 3.04554 5.60218 2.8875 6 2.8875C6.39782 2.8875 6.77936 3.04554 7.06066 3.32684C7.34196 3.60814 7.5 3.98968 7.5 4.3875V5.46C7.49985 6.20054 7.31694 6.92959 6.9675 7.5825L6.75 8.04C6.68623 8.15976 6.59117 8.25998 6.47494 8.32998C6.35872 8.39998 6.22568 8.43714 6.09 8.4375H5.94C5.79927 8.44271 5.65992 8.40819 5.53789 8.33789C5.41586 8.26759 5.31609 8.16435 5.25 8.04L5.0025 7.5825C4.66348 6.92691 4.49091 6.198 4.5 5.46V4.3875ZM10.5 14.25H1.5V12.9375C1.49971 12.6371 1.58963 12.3435 1.75812 12.0948C1.92661 11.8461 2.1659 11.6537 2.445 11.5425L5.25 10.44V9.69C5.49051 9.77732 5.74414 9.82297 6 9.825C6.25586 9.82297 6.50949 9.77732 6.75 9.69V10.44L9.54 11.505C9.8231 11.6142 10.0664 11.8068 10.2378 12.0572C10.4092 12.3076 10.5006 12.6041 10.5 12.9075V14.25ZM15.75 14.25H12V13.0125C11.9968 12.4849 11.8545 11.9675 11.5875 11.5125L12.375 11.2125V10.5525C12.4735 10.5751 12.574 10.5876 12.675 10.59H12.825C12.926 10.5876 13.0265 10.5751 13.125 10.5525V11.2125L15.0225 11.9625C15.2401 12.0394 15.4288 12.1814 15.563 12.3693C15.6972 12.5571 15.7703 12.7817 15.7725 13.0125V14.25H15.75Z'
            fill='#8496A8'
          />
        </g>
        <defs>
          <clipPath id='clip0'>
            <rect width='18' height='18' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Jobs',
    link: '/jobs',
    icon: (
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1.5 9.75H16.5V14.25C16.5 14.4489 16.421 14.6397 16.2803 14.7803C16.1397 14.921 15.9489 15 15.75 15H2.25C2.05109 15 1.86032 14.921 1.71967 14.7803C1.57902 14.6397 1.5 14.4489 1.5 14.25V9.75ZM16.5 6V9H1.5V6C1.5 5.80109 1.57902 5.61032 1.71967 5.46967C1.86032 5.32902 2.05109 5.25 2.25 5.25H5.25V4.5C5.25 3.90326 5.48705 3.33097 5.90901 2.90901C6.33097 2.48705 6.90326 2.25 7.5 2.25H10.5C11.0967 2.25 11.669 2.48705 12.091 2.90901C12.5129 3.33097 12.75 3.90326 12.75 4.5V5.25H15.75C15.9489 5.25 16.1397 5.32902 16.2803 5.46967C16.421 5.61032 16.5 5.80109 16.5 6ZM11.25 4.5C11.25 4.30109 11.171 4.11032 11.0303 3.96967C10.8897 3.82902 10.6989 3.75 10.5 3.75H7.5C7.30109 3.75 7.11032 3.82902 6.96967 3.96967C6.82902 4.11032 6.75 4.30109 6.75 4.5V5.25H11.25V4.5Z'
          fill='#8496A8'
        />
        <path
          d='M15.75 5.25H12.75V4.5C12.75 3.90326 12.5129 3.33097 12.091 2.90901C11.669 2.48705 11.0967 2.25 10.5 2.25H7.5C6.90326 2.25 6.33097 2.48705 5.90901 2.90901C5.48705 3.33097 5.25 3.90326 5.25 4.5V5.25H2.25C2.05109 5.25 1.86032 5.32902 1.71967 5.46967C1.57902 5.61032 1.5 5.80109 1.5 6V14.25C1.5 14.4489 1.57902 14.6397 1.71967 14.7803C1.86032 14.921 2.05109 15 2.25 15H15.75C15.9489 15 16.1397 14.921 16.2803 14.7803C16.421 14.6397 16.5 14.4489 16.5 14.25V6C16.5 5.80109 16.421 5.61032 16.2803 5.46967C16.1397 5.32902 15.9489 5.25 15.75 5.25ZM6.75 4.5C6.75 4.30109 6.82902 4.11032 6.96967 3.96967C7.11032 3.82902 7.30109 3.75 7.5 3.75H10.5C10.6989 3.75 10.8897 3.82902 11.0303 3.96967C11.171 4.11032 11.25 4.30109 11.25 4.5V5.25H6.75V4.5ZM15 13.5H3V9.75H15V13.5ZM15 9H3V6.75H15V9Z'
          fill='#8496A8'
        />
      </svg>
    ),
  },
  {
    name: 'Messaging',
    link: '/messaging',
    icon: <img src={} />,
  },
];
