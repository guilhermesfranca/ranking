import { GeoForm } from "@/components/GeoForm";
import { Person } from "@/components/Person";

const Page = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl m-4">Os homens mais ricos do Mundo</h1>
      <h3 className="text-2xl font-bold ">em <span className="text-3xl text-blue-600">2025</span></h3>
    </div>
    <div className="flex flex-wrap">
    
      <Person 
          name="Elon Musk"
          avatar="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReXPFAJ5cUhfTLDRA7ZJlBZdwOmO7AfLRhazE1rl5-nJhk0NHeTtwX983IoqiSjrPB-R4OiIN_uaPO9jqW41E2Ww"
          roles={['CEO da Tesla', 'CEO da SpaceX', 'CEO da X']} 
          ranking={1} 
          fortuna={421.2}    />
      <Person 
        name="Jeff Bezos"
        avatar="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS3xPE31tUdKcXYpMWPXAydUv28KL_5uWDal2Lf3-BwpJtLSV4Q_Wr2cr9xiq4KKyrxd0uQiaEdX0SMXo4"
        roles={['CEO da Amazon', 'CEO da BlueOrigin']}
        ranking={2}
        fortuna={233.5} 
      />
      <Person 
          name="Larry Ellison"
          roles={['CEO da Oracle']}
          avatar="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTP3g4IfhBLYhaa5TkwOAheqasjzmLS8J8UPbiY5Z7ScBEeGr-8U6i_udhjISrHh7y0f6PhCyDqoNZUlkY"
          ranking={3}
          fortuna={209.7}       />
        <Person 
          name="Mark Zuckerberg"
          roles={['CEO da Meta']}
          avatar='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'
          ranking={4}
          fortuna={202.5}       />
          <Person 
          name="Bernard Arnault"
          roles={['CEO da LVMH']}
          avatar="https://economicnewsbrasil.com.br/wp-content/uploads/2024/06/Bernard-Arnault.webp"
          ranking={5}
          fortuna={168.8}       />
          <Person 
          name="Larry Page"
          roles={['CEO da Google']}
          avatar="https://hips.hearstapps.com/hmg-prod/images/gettyimages-83414114.jpg"
          ranking={6}
          fortuna={156}       />
  
    </div>
    </div>
  )
}

export default Page;