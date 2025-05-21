import Hero from '../components/Hero'
import Main from '../components/Main'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
     <Hero />
     <Main />
     {/* <HomeCards /> */}
     {/* <JobListings isHome={true} />
     <ViewAllJobs /> */}
    </>
  )
}

export default HomePage