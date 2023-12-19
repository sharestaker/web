import Image from "next/image";

interface table {
    index: number;
    name: string;
    price: number;
    change: number;
    cap: number;
    action: string;
    imgSrc: string;
}

const tableData: table[] = []

const StakedPoints = () => {
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' id="points-section">
                <div className="table-b bg-navyblue p-8 overflow-x-auto">
                    <h3 className="text-offwhite text-2xl">Staked Points (WIP) (May release in 1 or 2 weeks) </h3>
                    <table className="table-auto w-full mt-10">
                        <thead>
                            <tr className="text-white bg-darkblue rounded-lg">
                                <th className="px-4 py-4 font-normal">#</th>
                                <th className="px-4 py-4 text-start font-normal">Address</th>
                                <th className="px-4 py-4 font-normal">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, i) => (
                                <tr key={i} className="border-b border-b-darkblue">
                                    <td className="px-4 py-6 text-center text-white">{items.index}</td>
                                    <td className="px-4 py-6 text-center text-white">${items.price.toLocaleString()}</td>
                                    <td className="px-4 py-6 text-center text-white">${items.cap.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default StakedPoints;