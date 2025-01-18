const IconWrapper = ({ children, ...props }) => (
  <svg width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" {...props}>
    {children}
  </svg>
)

export function TwitterIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z" />
    </IconWrapper>
  )
}

export function GithubIcon(props) {
  return (
    <IconWrapper {...props}>
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0002 2.41669C9.62627 2.41792 7.33013 3.25874 5.52241 4.78879C3.71469 6.31884 2.51327 8.43836 2.13297 10.7684C1.75268 13.0983 2.21829 15.4869 3.44658 17.5068C4.67487 19.5268 6.58572 21.0465 8.83746 21.7942C9.33423 21.8864 9.52135 21.5785 9.52135 21.3167C9.52135 21.0549 9.51141 20.2959 9.5081 19.466C6.72618 20.067 6.13834 18.2921 6.13834 18.2921C5.68462 17.1396 5.02888 16.8366 5.02888 16.8366C4.12145 16.2208 5.09678 16.2323 5.09678 16.2323C6.10192 16.3031 6.63015 17.2581 6.63015 17.2581C7.52103 18.7778 8.96993 18.3382 9.53956 18.0813C9.62898 17.4376 9.88896 16.9996 10.1754 16.751C7.95321 16.5007 5.61839 15.6478 5.61839 11.8379C5.60461 10.8498 5.97337 9.89423 6.64836 9.16892C6.5457 8.91866 6.20292 7.90771 6.74606 6.53455C6.74606 6.53455 7.58561 6.26782 9.49652 7.55372C11.1356 7.10804 12.8649 7.10804 14.504 7.55372C16.4132 6.26782 17.2511 6.53455 17.2511 6.53455C17.7959 7.90442 17.4531 8.91536 17.3505 9.16892C18.0276 9.89435 18.3971 10.8516 18.3821 11.8412C18.3821 15.6594 16.0423 16.5007 13.8168 16.746C14.1744 17.0556 14.494 17.6598 14.494 18.5885C14.494 19.9188 14.4824 20.989 14.4824 21.3167C14.4824 21.5818 14.6629 21.8913 15.1696 21.7942C17.4216 21.0464 19.3327 19.5264 20.561 17.5061C21.7892 15.4858 22.2546 13.0969 21.8739 10.7667C21.4931 8.43652 20.2911 6.31698 18.4828 4.78719C16.6745 3.2574 14.3778 2.41714 12.0035 2.41669H12.0002Z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="none" transform="translate(2 2)" />
        </clipPath>
      </defs>
    </IconWrapper>
  )
}

export function LinkedInIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M20.5195 2H3.47656C2.66016 2 2 2.64453 2 3.44141V20.5547C2 21.3516 2.66016 22 3.47656 22H20.5195C21.3359 22 22 21.3516 22 20.5586V3.44141C22 2.64453 21.3359 2 20.5195 2ZM7.93359 19.043H4.96484V9.49609H7.93359V19.043ZM6.44922 8.19531C5.49609 8.19531 4.72656 7.42578 4.72656 6.47656C4.72656 5.52734 5.49609 4.75781 6.44922 4.75781C7.39844 4.75781 8.16797 5.52734 8.16797 6.47656C8.16797 7.42187 7.39844 8.19531 6.44922 8.19531ZM19.043 19.043H16.0781V14.4023C16.0781 13.2969 16.0586 11.8711 14.5352 11.8711C12.9922 11.8711 12.7578 13.0781 12.7578 14.3242V19.043H9.79688V9.49609H12.6406V10.8008H12.6797C13.0742 10.0508 14.043 9.25781 15.4844 9.25781C18.4883 9.25781 19.043 11.2344 19.043 13.8047V19.043V19.043Z" />
    </IconWrapper>
  )
}

export function VercelIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3L22 20.3333H2L12 3Z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <IconWrapper {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </IconWrapper>
  )
}
