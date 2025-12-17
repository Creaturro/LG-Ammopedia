import { useState } from 'react'

// Icon Components
const CheckIcon = () => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.4 11.1L2.5 7.2L3.9 5.8L6.4 8.3L12.1 2.6L13.5 4L6.4 11.1Z" fill="#7ad9ab"/>
  </svg>
)

const LockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H7V6C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z" fill="#7ad9ab"/>
  </svg>
)

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 22C6.45 22 5.97917 21.8042 5.5875 21.4125C5.19583 21.0208 5 20.55 5 20C5 19.45 5.19583 18.9792 5.5875 18.5875C5.97917 18.1958 6.45 18 7 18C7.55 18 8.02083 18.1958 8.4125 18.5875C8.80417 18.9792 9 19.45 9 20C9 20.55 8.80417 21.0208 8.4125 21.4125C8.02083 21.8042 7.55 22 7 22ZM17 22C16.45 22 15.9792 21.8042 15.5875 21.4125C15.1958 21.0208 15 20.55 15 20C15 19.45 15.1958 18.9792 15.5875 18.5875C15.9792 18.1958 16.45 18 17 18C17.55 18 18.0208 18.1958 18.4125 18.5875C18.8042 18.9792 19 19.45 19 20C19 20.55 18.8042 21.0208 18.4125 21.4125C18.0208 21.8042 17.55 22 17 22ZM6.15 6L8.55 11H15.55L18.3 6H6.15ZM5.2 4H19.95C20.3 4 20.5583 4.15 20.725 4.45C20.8917 4.75 20.9 5.06667 20.75 5.4L17.3 11.6C17.1167 11.9333 16.875 12.1875 16.575 12.3625C16.275 12.5375 15.9333 12.625 15.55 12.625L8.1 12.65L7 14.5H19V16.5H7C6.25 16.5 5.68333 16.1708 5.3 15.5125C4.91667 14.8542 4.9 14.2 5.25 13.55L6.6 11.1L3 4H1V2H4.25L5.2 4Z" fill="#10331f"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.95 17.5C15.3 17.5 13.675 17.1208 12.075 16.3625C10.475 15.6042 9.01667 14.5583 7.7 13.225C6.38333 11.8917 5.34167 10.4208 4.575 8.8125C3.80833 7.20417 3.425 5.58333 3.425 3.95C3.425 3.7 3.5 3.5 3.65 3.35C3.8 3.2 4 3.125 4.25 3.125H7.25C7.45 3.125 7.625 3.1875 7.775 3.3125C7.925 3.4375 8.025 3.6 8.075 3.8L8.6 6.35C8.63333 6.56667 8.625 6.75417 8.575 6.9125C8.525 7.07083 8.43333 7.2 8.3 7.3L6.175 9.425C6.90833 10.6417 7.77083 11.7333 8.7625 12.7C9.75417 13.6667 10.85 14.5 12.05 15.2L14.125 13.125C14.2583 12.9917 14.4208 12.8917 14.6125 12.825C14.8042 12.7583 14.9917 12.7417 15.175 12.775L17.725 13.3C17.925 13.35 18.0875 13.4583 18.2125 13.625C18.3375 13.7917 18.4 13.975 18.4 14.175V17.175C18.4 17.425 18.325 17.625 18.175 17.775C18.025 17.925 17.825 18 17.575 18H16.95V17.5Z" fill="white"/>
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33333 16.6667C2.875 16.6667 2.48264 16.5035 2.15625 16.1771C1.82986 15.8507 1.66667 15.4583 1.66667 15V5.00001C1.66667 4.54167 1.82986 4.14931 2.15625 3.82292C2.48264 3.49653 2.875 3.33334 3.33333 3.33334H16.6667C17.125 3.33334 17.5174 3.49653 17.8438 3.82292C18.1701 4.14931 18.3333 4.54167 18.3333 5.00001V15C18.3333 15.4583 18.1701 15.8507 17.8438 16.1771C17.5174 16.5035 17.125 16.6667 16.6667 16.6667H3.33333ZM10 10.4167L3.33333 6.25001V15H16.6667V6.25001L10 10.4167ZM10 8.75001L16.6667 4.58334H3.33333L10 8.75001Z" fill="white"/>
  </svg>
)

const HomeIcon = () => (
  <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 0L0 8.5H3V13H9V9H13V13H19V8.5H22L11 0Z" fill="white"/>
  </svg>
)

const SearchIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4167 19.625L12.7083 13.9167C12.2292 14.2917 11.6771 14.5903 11.0521 14.8125C10.4271 15.0347 9.76389 15.1458 9.0625 15.1458C7.34028 15.1458 5.88281 14.5501 4.69011 13.3586C3.49741 12.1671 2.90081 10.7103 2.89986 8.98834C2.89891 7.26639 3.49551 5.80939 4.68917 4.61762C5.88281 3.42587 7.34028 2.82951 9.0614 2.82856C10.7825 2.82761 12.2395 3.42398 13.4322 4.61762C14.6248 5.81127 15.2207 7.26826 15.2198 8.98834C15.2198 9.68973 15.1087 10.3529 14.8865 10.9779C14.6643 11.6029 14.3657 12.155 13.9906 12.6342L19.7 18.3425L18.4167 19.625ZM9.0625 13.3333C10.2743 13.3333 11.3047 12.9132 12.1536 12.073C13.0026 11.2328 13.4266 10.2065 13.4256 8.99405C13.4247 7.78161 13.0007 6.75491 12.1536 5.91381C11.3066 5.07269 10.2762 4.6526 9.0625 4.65356C7.84876 4.65451 6.81848 5.0746 5.97167 5.91381C5.12486 6.75301 4.70098 7.77972 4.70001 8.99405C4.69905 10.2084 5.12294 11.2346 5.97167 12.073C6.82038 12.9113 7.85066 13.3314 9.0625 13.3333Z" fill="#999"/>
  </svg>
)

// Logo Component
const Logo = () => (
  <img src="/images/logo.svg" alt="Lucky Gunner" className="h-10 sm:h-14" />
)

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  const menuItems = [
    { label: 'Bulk Ammo', href: '#' },
    { label: 'Specials', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Labs', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'FAQ', href: '#' },
  ]

  const features = [
    'In Stock',
    'Fast Shipping',
    '$100 Guarantee',
  ]

  return (
    <header className="w-full overflow-hidden">
      {/* Top Header Section */}
      <div className="relative h-20 sm:h-28 bg-gray-50">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/header_bg.png)',
          }}
        />

        {/* Header Content */}
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4 sm:gap-8">
            <Logo />

            {/* Features */}
            <div className="hidden lg:flex flex-col gap-0.5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckIcon />
                  <span className="text-lg text-[#7ad9ab] tracking-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - hidden on mobile */}
          <div className="hidden sm:flex flex-col items-end gap-3 self-start">
            {/* CTA Buttons */}
            <div className="flex">
              <button className="flex items-center gap-2 bg-[#163322] text-[#7ad9ab] px-4 py-2.5 rounded-bl-lg rounded-br-lg hover:bg-[#1a3d29] transition-colors">
                <LockIcon />
                <span className="text-[15px] tracking-tight">My Account</span>
              </button>
              <button className="flex items-center gap-1 bg-[#dad321] text-[#10331f] px-3 py-2.5 rounded-bl-lg rounded-br-lg hover:bg-[#e5de2d] transition-colors">
                <CartIcon />
                <span className="text-[15px] tracking-tight">My Cart</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-4 text-white">
              <div className="flex items-center gap-1.5">
                <PhoneIcon />
                <span className="text-base">Call Us (800) 317-9506</span>
              </div>
              <div className="w-px h-5 bg-white/50" />
              <div className="flex items-center gap-1.5">
                <MailIcon />
                <span className="text-base">Email Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-b from-[#0e7f3f] to-[#0d7339] overflow-hidden">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-11">
            {/* Menu Items */}
            <div className="flex items-center overflow-x-auto">
              {/* Home Icon */}
              <a
                href="#"
                className="flex items-center justify-center w-10 sm:w-[71px] h-11 bg-[#086d33] hover:bg-[#075a2a] transition-colors flex-shrink-0"
              >
                <HomeIcon />
              </a>

              {/* Menu Links - hidden on small mobile */}
              <div className="hidden sm:flex">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center justify-center px-3 lg:px-6 h-11 text-white text-sm lg:text-[17px] tracking-tight border-r border-[#0c661f] hover:bg-[#0c661f] transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex flex-1 sm:flex-none justify-end ml-2">
              <div className="relative">
                <div className="absolute left-2 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-[200px] lg:w-[296px] h-9 pl-10 pr-4 rounded-l bg-white text-sm lg:text-[17px] tracking-tight placeholder:text-gray-400 shadow-[inset_3px_3px_1px_rgba(0,0,0,0.2)] focus:outline-none"
                />
              </div>
              <button className="h-9 px-2 sm:px-4 bg-[#086d33] text-white font-bold text-sm lg:text-[17px] tracking-tight rounded-r-lg hover:bg-[#075a2a] transition-colors flex-shrink-0">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
