export default function HeroAlt() {
    return     <section className="mx-auto max-w-6xl min-h-screen py-12 flex items-center justify-center border-2 relative">
    <div className="grid grid-cols-12 border-2 gap-4 w-full h-full max-w-6xl">
      {/* Left Box */}
      <div className=" col-span-8 border-2">
        <div className="bg-white w-1/2 h-[80%] rounded-md p-6">
        <p className="text-lg mb-4">Hello,</p>
        <p className="text-sm">
          Front End Developer and UX Designer with 5+ years of experience, including significant work as a federal contractor, now seeking to transition into the commercial space. Offers a unique blend of technical expertise and design sensibility that bridges the gap between aesthetics and functionality, ensuring projects maintain a cohesive vision from conception to completion.
        </p>
        </div>
      
      </div>

      {/* Empty Middle Box (spacer in this design) */}
      <div className="bg-gray-200 w-40 h-40 absolute z-[-1]">hi</div>

      {/* Right Box */}
      <div className="bg-white col-span-4 shadow-md rounded-md p-6">
        <h2 className="text-xl font-bold mb-4">Top Skills</h2>
        {/* Skills list goes here */}
      </div>
    </div>
  </section>
}