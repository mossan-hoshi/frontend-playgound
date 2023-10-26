import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-screen bg-gray-100">
      {/* Left div */}
      <div className="flex items-center justify-center bg-white">
        <div className="w-3/4">
          <div className="flex w-full h-auto justify-center">
            <Image src="/card.png" layout='responsive' width={500} height={500} objectFit='cover' alt="Credit Card Image"  />
          </div>
        </div>
      </div>

      {/* Right div */}
      <div className="flex flex-col items-center justify-center bg-white p-10">
        <div className="w-full max-w-md">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="1234 5678 9012 3456"
          />

          <label className="block mb-2 font-bold text-gray-700" htmlFor="nameOnCard">
            Name On Card
          </label>
          <input
            type="text"
            id="nameOnCard"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="John Doe"
          />

          <label className="block mb-2 font-bold text-gray-700" htmlFor="expiryDate">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="MM/YY"
          />

          <label className="block mb-2 font-bold text-gray-700" htmlFor="cvv">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="123"
          />

          <button className="w-full bg-blue-500 text-white p-3 rounded-md focus:outline-none focus:ring focus:border-blue-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}