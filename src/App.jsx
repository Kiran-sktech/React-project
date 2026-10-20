import Card from './components/card'

import { User } from 'lucide-react'



const App=()=>{
  const jobOpenings = [
  {
    brandLogo: "data:image/jpeg;base64,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",
    name: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    name: "Apple",
    datePosted: "1 week ago",
    post: "Software Engineer Intern",
    tag1: "Part Time",
    tag2: "Entry Level",
    pay: "$35/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Remote, India",
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "data:image/png;base64,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",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "UI/UX Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Noida, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/salesforce",
    name: "Salesforce",
    datePosted: "10 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$38/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    name: "Oracle",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Bengaluru, India",
  },
];

  console.log(jobOpenings)
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} location={elem.location}/>
        </div>
      })}
    </div>
  )
}


export default App
