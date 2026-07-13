import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Contact.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState()

  const sectionRef = useRef(null)
  const socialProofRef = useRef(null)
  const descriptionRef = useRef(null)
  const rightColumnRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Create scroll trigger animations
    const socialProof = socialProofRef.current
    const description = descriptionRef.current
    const rightColumn = rightColumnRef.current

    // Animate social proof
    if (socialProof) {
      gsap.fromTo(
        socialProof,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
        }
      )
    }

    // Animate description
    if (description) {
      gsap.fromTo(
        description,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
        }
      )
    }

    // Animate right column
    if (rightColumn) {
      gsap.fromTo(
        rightColumn,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Social Proof & Description */}
          <div className={styles.leftColumn}>
            {/* Social Proof */}
            <div ref={socialProofRef} className={styles.socialProof}>
              <div className={styles.avatarsGroup}>
                <div className={`${styles.avatar} ${styles.avatar1}`}>AK</div>
                <div className={`${styles.avatar} ${styles.avatar2}`}>JD</div>
                <div className={`${styles.avatar} ${styles.avatar3}`}>SM</div>
                <div className={`${styles.avatar} ${styles.avatar4}`}>85+</div>
              </div>
              <div className={styles.socialInfo}>
                <p className={styles.socialText}>Trusted by clients</p>
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={styles.star}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className={styles.ratingText}>4.9/5</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p ref={descriptionRef} className={styles.description}>
              We have an expert for every need — from web design and SEO to branding, conversion optimization, and content strategy. Whatever your digital goal, our team delivers solutions that drive measurable results.
            </p>
          </div>

          {/* Right Column - Form */}
          <div ref={rightColumnRef} className={styles.rightColumn}>
            <h2 className={styles.heading}>
              Get in touch and let&apos;s create a solution that drives results.
            </h2>

            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.inputField}
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.inputField}
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textareaField}
              />

              {/* Submit Button */}
              <div className={styles.buttonContainer}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitButton}
                >
                  {isSubmitting ? 'Sending...' : 'Start Your Project'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className={`${styles.statusMessage} ${styles.successMessage}`}>
                    Thank you! We&apos;ll be in touch soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className={`${styles.statusMessage} ${styles.errorMessage}`}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
