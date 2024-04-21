import { useState } from 'react';
import { CircleDollarSign } from 'lucide-react';

const createBid = async (betAmount: number, userId: string, postId: string, wallet: any) => {
    try {
        const response = await fetch(`https://backend-only-pics.vercel.app/api/add-bettor/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                wallet: wallet,
                betAmount: betAmount,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            alert('Bid placed successfully');
        } else {
            console.error('Something went wrong');
        }
    } catch (error) {
        console.error(error);
    }
};

export default function BidBtn({ userId, bidAmount, postId, wallet }: { userId: string, bidAmount:number, postId: string; wallet: any }) {
    // const [betAmount, setBetAmount] = useState(0);

    return (
        <div className="bg-gradient-to-r from-[#5706f3] to-[#8905ff] rounded-lg px-2 py-1 flex items-center mr-1 lg:mr-5 gap-2 brightness-95 hover:brightness-110 transition">
            {/* <input
                type="number"
                placeholder="Enter bet amount"
                className="border border-primary rounded-lg p-2"
                onChange={(e) => setBetAmount(Number(e.target.value))}
            /> */}
            <CircleDollarSign />
            <button
                // className="bg-primary rounded-lg p-2 text-white"
                onClick={() => createBid(bidAmount, userId, postId, wallet)}
            >
                <p><span className="hidden lg:inline">Current bid:</span>{bidAmount}</p>
            </button>
        </div>
    );
}