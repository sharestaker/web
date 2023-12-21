import Image from "next/image";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import JsonData from './latest.json'

interface DataType {
    key: React.Key;
    rank: number;
    points: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Rank',
        dataIndex: 'rank',
        width: 100,
        align: 'right'
    },
    {
        title: 'Points',
        dataIndex: 'points',
        width: 350,
        align: 'right'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        align: 'right'
    },
];




const StakedPoints = () => {
    const data = JsonData.map(row => ({ rank: row.rank, points: row.points, address: row.address }));
    return (
        <>
            <div className='mx-auto max-w-7xl pt-40 px-6' id="points-section">
                <div className="table-b bg-navyblue p-8 overflow-x-auto">
                    <h3 className="text-offwhite text-2xl">Staked Points (update at block 7828792) </h3>
                    <Table className="table-auto w-full mt-10" columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </>
    )
}

export default StakedPoints;