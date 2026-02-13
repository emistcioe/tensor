import { useRef, useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase"
import bgImage from "../../images/assets/tcioe.jpg"
import qrCode from "../../images/assets/qr.jpeg"

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    campus: '',
    engineering: '',
    year: '',
    ai_level: '',
    read_researchPaper: '',
    interested_in_research_ideas_application: '',
    heard_from: '',
    suggestions: '',
    transactionCode: '',
    senderNumber: ''
  })
  const yearOptions = ["First", "Second", "Third", "Fourth", "Other"]
  const ai_levelOptions = ["Beginner", "Intermediate", "Advanced", "Not Applicable"]
  const read_researchPaperOptions = ["Yes", "No", "Little bit"]
  const interested_in_research_ideas_applicationOptions = ["Yes", "Maybe", "No"]
  const heard_fromOptions = ["Friends", "Social Media", "Club Announcement", "Other"]

  const formData = useRef(null)
  const [errors, setErrors] = useState({})
  const [confirmed, setConfirmed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)

  const notValidField = (value) =>
    !value || value.trim() === ""

  const isValidFullName = (name) => {
    const parts = name.trim().split(/\s+/)
    return parts.length >= 2
  }
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  }
  const handleChange = async (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newErrors = {} // create a newErrors object each time on submission of form 
    // Full Name
    if (notValidField(form.fullname)) { newErrors.fullname = "Please fill out this field" }
    else if (!isValidFullName(form.fullname)) {
      newErrors.fullname = "Please enter atleast first and last name"
    }
    // Email
    if (notValidField(form.email)) { newErrors.email = "Please fill out this field" }
    else if (!isValidEmail(form.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (notValidField(form.campus)) { newErrors.rollno = "Please fill out this field" }
    if (notValidField(form.engineering)) { newErrors.rollno = "Please fill out this field" }
    if (notValidField(form.year)) { newErrors.year = "Please choose an option" }
    if (notValidField(form.read_researchPaper)) { newErrors.read_researchPaper = "Please choose an option" }
    if (notValidField(form.transactionCode) && notValidField(form.senderNumber)) {
      newErrors.paymentConfirmation = "Can't proceed without filling out atleast one field"
    }
    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {// if atleast one invalid field, wont submit the form
      formData.current?.scrollIntoView() // and take user to top of the page for rethinking their lifechoices
      return
    }
    console.log(form)
    // sending data to firebase
    try {
      setSubmitting(true)
      await addDoc(collection(db, "applications"), {
        fullname: form.fullname,
        email: form.email,
        campus: form.campus,
        engineering: form.engineering,
        year: form.year,
        ai_level: form.ai_level,
        read_researchPaper: form.read_researchPaper,
        interested_in_research_ideas_application: form.interested_in_research_ideas_application,
        heard_from: form.heard_from,
        suggestions: form.suggestions,
        transactionCode: form.transactionCode,
        senderNumber: form.senderNumber,
        createdAt: serverTimestamp()
      })
      setOverlay(true)
      setSuccess(true)
      setSubmitting(false)
    } catch (error) {
      console.error(error)
      setOverlay(true)
      setFailure(true)
    }
    // clearing the form after submission 
    setForm({
      fullname: '',
      email: '',
      campus: '',
      engineering: '',
      year: '',
      ai_level: '',
      read_researchPaper: '',
      interested_in_research_ideas_application: '',
      heard_from: '',
      suggestions: '',
      transactionCode: '',
      senderNumber: ''
    })
    setConfirmed(false)
  }
  return (
    <>
      <div className='w-full relative mb-2'>
        <img className="w-full h-48 object-cover" src={bgImage} alt="Event here" />
        <div className="w-full h-full  bg-[#1360A5B0] grid place-content-center absolute top-0">
          <span className='text-3xl font-semibold text-white animate-popup'>APPLY NOW</span>
        </div>
      </div>
      <h1 className='text-3xl sm:text-4xl font-extrabold text-center mt-10 mb-7 relative z-10'>Research Week: Paper to Production</h1>
      <div className="text-lg sm:text-xl font-bold text-center relative z-10">Complete the form below to enroll in Research Week.</div>
      <div className="w-[90%] xl:w-width mx-auto mb-10 relative">
        {/* blob */}
        <div className="max-sm:w-[300px] w-[400px] aspect-square bg-[#90C3F6] absolute z-0 -top-40 sm:-top-36 -left-44 sm:-left-80 rounded-customborder animate-change" />
        <div className="my-7 text-base sm:text-lg relative z-10">
          <div>
            <span className="font-extrabold">Research Week: Paper to Production</span> is an upcoming workshop series focused on helping students understand how to:
          </div>
          <ol className="list-disc ml-6 my-3">
            <li>Read and understand research papers effectively</li>
            <li>Analyze research problems, methods, and results</li>
            <li>Bridge the gap between theory and practice</li>
            <li>Translate research ideas into real-world applications and solutions</li>
          </ol>

          <div ref={formData}>
            It is a six-day academic program designed to guide participants through
            the process of understanding research papers and translating theoretical
            concepts into practical implementation.
          </div>
        </div>
        <form noValidate onSubmit={handleSubmit}
          className="flex flex-col gap-7 bg-white relative z-10"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-lg">Full Name<span className="text-red-500"> *</span></span>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-boxShadow"
              />
              {errors.fullname && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.fullname}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg">Email<span className="text-red-500"> *</span></span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Eg: abc@gmail.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-boxShadow"
              />
              {errors.email && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg">Campus Name<span className="text-red-500"> *</span></span>
              <input
                type="text"
                name="campus"
                value={form.campus}
                onChange={handleChange}
                placeholder="Eg: Thapathali Campus"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-boxShadow"
              />
              {errors.campus && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.campus}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-lg">Engineering Discipline<span className="text-red-500"> *</span></span>
              <input
                type="text"
                name="engineering"
                value={form.engineering}
                onChange={handleChange}
                placeholder="Eg: BCT"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-boxShadow"
              />
              {errors.engineering && (
                <p className="text-red-500 pt-2 text-sm uppercase">{errors.engineering}</p>
              )}
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-3">
            <span className="text-lg">Year<span className="text-red-500"> *</span></span>
            <div className="w-full text-lg flex max-sm:flex-col items-start justify-between">
              {yearOptions.map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    name="year"
                    value={option}
                    checked={form.year === option}
                    onChange={handleChange}
                    className="mr-2 cursor-pointer"
                  />
                  {option}
                </label>
              ))}
            </div>
            {errors.year && (
              <p className="text-red-500 pt-2 text-sm uppercase">{errors.year}</p>
            )}
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-3">
            <span className="text-lg">Your current level in AI / Machine learning?</span>
            <div className="w-full text-lg flex max-sm:flex-col items-start justify-between">
              {ai_levelOptions.map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    name="ai_level"
                    value={option}
                    checked={form.ai_level === option}
                    onChange={handleChange}
                    className="mr-2 cursor-pointer"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-3">
            <span className="text-lg">Have you read a research paper before?<span className="text-red-500"> *</span></span>
            <div className="w-full text-lg flex max-sm:flex-col items-start justify-between">
              {read_researchPaperOptions.map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    name="read_researchPaper"
                    value={option}
                    checked={form.read_researchPaper === option}
                    onChange={handleChange}
                    className="mr-2 cursor-pointer"
                  />
                  {option}
                </label>
              ))}
            </div>
            {errors.read_researchPaper && (
              <p className="text-red-500 pt-2 text-sm uppercase">{errors.read_researchPaper}</p>
            )}
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-3">
            <span className="text-lg">Are you interested in learning how research ideas can be applied in real-life problems?</span>
            <div className="w-full text-lg flex max-sm:flex-col items-start justify-between">
              {interested_in_research_ideas_applicationOptions.map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    name="interested_in_research_ideas_application"
                    value={option}
                    checked={form.interested_in_research_ideas_application === option}
                    onChange={handleChange}
                    className="mr-2 cursor-pointer"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-3">
            <span className="text-lg">How did you hear about this Workshop?</span>
            <div className="w-full text-lg flex max-sm:flex-col items-start justify-between">
              {heard_fromOptions.map((option) => (
                <label key={option} className="cursor-pointer">
                  <input
                    type="radio"
                    name="heard_from"
                    value={option}
                    checked={form.heard_from === option}
                    onChange={handleChange}
                    className="mr-2 cursor-pointer"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-4">
            <span>Any suggestions for future Workshop and Events?</span>
            <textarea
              name="suggestions"
              value={form.suggestions}
              onChange={handleChange}
              placeholder="Your text here ..."
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-3">
            <span className="text-lg">Payment<span className="text-red-500"> *</span></span>
            <span className="text-red-500 italic">Note: Please write your Full Name and College Name in the remarks section while paying</span>
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-lg">SCAN TO PAY</span>
              <img className="w-60 sm:w-72 aspect-square border-2 border-black border-dashed" src={qrCode} alt="QRCODE" />
              <span className="text-lg">PLEASE VERFIY THE AMOUNT BEFORE PROCEEDING</span>
            </div>
            <hr className="border-gray-300" />
            <span className="text-lg">Payment Confirmation<span className="text-red-500"> *</span></span>
            <span className="text-red-500 italic">Note: Please fill in at least one field to proceed.</span>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="transactionCode"
                value={form.transactionCode}
                onChange={handleChange}
                placeholder="Transaction Code"
                required
                className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-boxShadow"
              />
              <div className="flex items-center">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-3 text-gray-500 font-medium">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <input
                type="number"
                name="senderNumber"
                value={form.senderNumber}
                onChange={handleChange}
                placeholder="Sender's Phone Number"
                required
                className="w-full h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-boxShadow"
              />
            </div>
            {errors.paymentConfirmation && (
              <p className="text-red-500 pt-2 text-sm uppercase">{errors.paymentConfirmation}</p>
            )}
          </div>
          <hr className="border-gray-300" />
          <div className="flex flex-col gap-4">
            <span className="text-lg">Confirmation<span className="text-red-500"> *</span></span>
            <label className="flex" >
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="w-6 aspect-square mr-3"
              />
              I confirm that the information provided above is true and I agree to
              follow the rules and guidelines of the workshop.
            </label>
          </div>
          <button
            type="submit"
            disabled={!confirmed || submitting}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {submitting ? "Submitting...." : "Submit"}
          </button>
        </form >
      </div >

      <div className={`w-[100vw] h-[100vh] fixed top-0 z-30 bg-[#00000099] ${overlay ? "flex" : "hidden"} justify-center items-center`}>
        {/* For form submission successful  */}
        <div className={`p-4 sm:p-6 bg-white rounded-lg ${success ? "flex" : "hidden"} flex-col justify-center items-center gap-2 sm:gap-5`}>
          <div className="text-xl sm:text-3xl font-bold text-center">Form Submitted ✅</div>
          <div className="text-sm sm:text-base flex flex-col items-center justify-center">
            <span>Your application has been successfully recorded.</span>
            <span>We'll get back to you shortly.</span>
          </div>
          <div
            onClick={() => {
              setOverlay(false)
              setSuccess(false)
            }}
            className="w-full grid place-content-center p-2 cursor-pointer rounded-lg bg-green-400 uppercase hover:bg-green-600">Continue</div>
        </div>
        {/* For form submission failed */}
        <div className={`p-4 sm:p-6 bg-white rounded-lg ${failure ? "flex" : "hidden"} flex-col justify-center items-center gap-3 sm:gap-5`}>
          <div className="text-2xl sm:text-3xl font-bold text-center">Submission Failed❗</div>
          <div className="flex flex-col items-center justify-center">
            <span>Something went wrong.</span>
            <span>Please try again.</span>
          </div>
          <div
            onClick={() => {
              setOverlay(false)
              setFailure(false)
            }}
            className="w-full grid place-content-center p-2 cursor-pointer rounded-lg bg-red-400 uppercase hover:bg-red-600">Retry</div>
        </div>
      </div >
    </>
  )
}