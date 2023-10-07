import Image from 'next/image'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-4/5 flex flex-col items-center justify-center md:flex-row mx-auto">
        <div className="w-full md:w-1/2 px-20 text-center flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold py-5">About Me</h1>
          <p className="text-xl font-medium py-5">  
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            et quas molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat facere possimus,
            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
            ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.
          </p>
        </div>
        
        <img
          className="w-full md:w-1/2 p-5 ml-auto h-auto max-w-3xl rounded-full dark:shadow-white-800 shadow-xl"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="Photo of Alex Gardiner"
        />

      </div>
    </div>

  )
}

