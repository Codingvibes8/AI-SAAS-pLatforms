import Image from "next/image";


export default function Loader() {
    return (
        <div className={'h-full flex flex-col gap-y-4 items-center' +
            ' justify-center'}>
      <div className={'w-10 h-10 relative animate-spin'}>
     <Image src={'/aibrains.jpg'} fill alt={''}/>
         </div>
<p>
thinking genius

</p>
        </div>
    );
}
