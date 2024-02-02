import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section className="flex max-container justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] max-sm:text-center font-palanquin font-bold lg:max-w-md "><span className="text-coral-red">İndirim</span> ve <span className="text-coral-red">Kampanyalardan</span> Haberdar Olmak için Üye Olmayı Unutmayın!</h3>
<div  className=" w-full flex items-center  max-sm:flex-col gap-5 p-2.5  sm:border sm:border-slate-gray rounded-full" >
<input placeholder="subscribe@modaayakkabi.com" className="input"   type="text"/>
<div className="flex max-sm:justify-end items-center max-sm:w-full"><Button label="Oturum Aç" fullWidth /></div>
</div>

    </section>
  )
}

export default Subscribe
