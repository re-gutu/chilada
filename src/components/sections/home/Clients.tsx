import LogoCarousel from "@/components/ui/LogoCarousal";

const partners = [
  "/partners/Addis way.png",
  "/partners/Ahununu.png",
  "/partners/Amba.png",
  "/partners/Amen furniture.png",
  "/partners/Amole.png",
  "/partners/Arif.png",
  "/partners/Atobaba.png",
  "/partners/BW.png",
  "/partners/Chanoly.png",
  "/partners/Dashen.png",
  "/partners/DMC realstate.png",
  "/partners/Dube ale.png",
  "/partners/E-birr.png",
  "/partners/EGC.png",
];

const Clients = () => {
  return (
    <div className='h-[50vh] py-24'>
      <h5 className='uppercase text- w-full text-center'>Trusted by leading companies</h5>
        <LogoCarousel logos={partners} />
    </div>
  )
}

export default Clients