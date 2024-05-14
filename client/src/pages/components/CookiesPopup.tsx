interface CookiesPopupProps {
  onConsent: () => void
}

const CookiesPopup: React.FC<CookiesPopupProps> = ({ onConsent }) => {
  return (
    <div className='sticky flex justify-between items-center bottom-[20px] w-auto right-5 z-50 bg-artemis-green m-8 rounded-md pl-9 pr-5 py-5'>
      <p className='text-center'>
        We use cookies to enhance your experience on our website, including
        providing personalized content and analyzing site traffic. By clicking
        &apos;Agree&apos;, you consent to the use of cookies and other tracking
        technologies.
      </p>
      <button
        className='bg-artemis-black text-artemis-white rounded-md px-5 py-3 ml-9'
        onClick={onConsent}>
        Agree
      </button>
    </div>
  )
}

export default CookiesPopup
