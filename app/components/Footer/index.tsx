import Image from "next/image";
import Link from "next/link";

interface Social {
  imgsrc: string,
  href: string,
}

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/share_staker" },
  { imgsrc: '/images/Footer/email.svg', href: "mailto:support@sharestaker.com" }
]

const footer = () => {
  return (
    <div className="relative">


      {/* Contact Us Section */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <div className='flex gap-4 items-center justify-center'>
          {/* You can add a larger "Contact Us" text here */}
          {socialLinks.map((items, i) => (
            <Link href={items.href} key={i}>
              <Image src={items.imgsrc} alt={items.imgsrc} width={30} height={30} className='footer-icons' />
              {/* <img src={items.imgsrc} alt={items.imgsrc} className='footer-icons' /> */}
            </Link>
          ))}
        </div>
        <h3 className='text-center text-offwhite text-lg'> @2023 Share Staker - All Rights Reserved</h3>
      </div>

    </div>
  )
}

export default footer;
