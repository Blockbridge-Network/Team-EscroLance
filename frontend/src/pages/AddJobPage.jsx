import { useState } from "react"
import { useNavigate } from "react-router-dom";
// import bg from '../assets/images/others/bg1.jpg';
const AddJobPage = ({ addJobSubmit }) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Full-Time');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('Under $50K');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    const navigate = useNavigate();
    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone
            },
        };

      addJobSubmit(newJob);

      return navigate('/jobs');
    };
  return (
    <>
          <section className="bg-[#0F0823">
            {/* <div className="w-full h-[400px] rounded-b-[20%] overflow-hidden z-[0px]">
              <img src={bg} className="w-full h-full z-0" />
            </div> */}

            
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-xl border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-black text-center font-semibold mb-6">Post new job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block font-bold mb-2 text-black"
                >Title</label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3 text-black"
                required
                value={type}
                onChange={(e) => setType(e.target.value) }
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
              >
              <select
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 text-black"
                required
                value={title}
                onChange={(e) => setSalary(e.target.value) }
              >
                <option value="Web Devlopment">Web Devlopment</option>
                <option value="Frontend Development">Frontend Development</option>
                <option value="Backend Development">Backend Development</option>
                <option value="App Development">App Development</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="AL & ML">AL & ML</option>
                <option value="Blockchain Engineer">Blockchain Engineer</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Network Marketing">Network Marketing</option>
                <option value="Copy Writer">Copy Writer</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3 text-black"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value) }
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3 text-black"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value) }
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2 text-black'
                placeholder='Company Location'
                required       
                value={location}
                onChange={(e) => setLocation(e.target.value) }    
              />
            </div>

            <h3 className="text-2xl mb-5 text-black">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3 text-black"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value) }
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3 text-black"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value) }
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2 text-black"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value) }
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2 text-black"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value) }
              />
            </div>

            <div>
              <button
                className="bg-[#0F0823] hover:bg-[#0f0823e6] text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default AddJobPage