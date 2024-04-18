import {useState } from 'react';
const Accordion = ({name, title, description, isVisible, setisVisible}) => {
    return (
        <div className="p-3 pt-0 border-2 border-black mb-4">
        <h1 className=" text-3xl font-bold pb-3" >{title}</h1>
        {isVisible && <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>}
        <button className= "border-2 border-grey bg-gray py-1  px-3 mt-2" onClick={()=> isVisible ? setisVisible('') : setisVisible(name)}> {isVisible? 'Hide' : 'Show'}</button>
        </div>

    )

}

const Instamart = () => {
    const [toShowSection , settoShowSection] = useState('about');
    return (
        <>
        <h1 className=" text-3xl font-bold text-center mt-4 mb-4" >Instamart</h1>
        <Accordion title="About" name={'about'} isVisible={toShowSection === 'about'} setisVisible={(value)=>settoShowSection(value)} />
        <Accordion title="Team"  name={'team'} isVisible={toShowSection === 'team'} setisVisible={(value)=>settoShowSection(value)}/>
        <Accordion title="Carrer"  name={'carrer'} isVisible={toShowSection === 'carrer' } setisVisible={(value)=>settoShowSection(value)}/>

        </>
    )
}

export default Instamart;