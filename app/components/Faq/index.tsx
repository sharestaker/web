"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. What are Stacked Points?",
        subheading: 'Staked points are for staking users who deposit their native tokens to Share Staker node.'
    },
    {
        heading: "2. How to get Stacked Points?",
        subheading: 'Just stake to Share Staker node and you will get stacked points. '
    },
    {
        heading: "3. When calculate Staked Points?",
        subheading: 'Staked Points are calculated every week and random time of week.'
    },

]

const Faq = () => {
    return (
        <div className="my-20 px-6 " id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Frequently Asked And Question</h3>
            <p className="text-center lg:text-lg font-normal text-bluish">Share Staker operates as a staking service focused on distributing staking profits. Stake with Share Staker to receive shared points and potentially be eligible for SS tokens airdrop!</p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-2">
                        <Image src={'/images/Faq/faq.png'} alt="faq-image" width={941} height={300} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
