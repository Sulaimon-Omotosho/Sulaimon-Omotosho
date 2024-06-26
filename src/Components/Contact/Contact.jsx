import React, { useRef } from 'react'
import './contact.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const Contact = () => {
  const ref = useRef()

  const inView = useInView(ref, { margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      className='contact'
      variants={variants}
      initial='initial'
      whileInView='animate'
    >
      <motion.div className='textContainer' variants={variants}>
        <motion.h1 variants={variants}>Contact Me</motion.h1>
        <motion.div variants={variants} className='item'>
          <h2>Mail</h2>
          <span>susudef2u@gmail.com</span>
        </motion.div>
        {/* <motion.div variants={variants} className='item'>
          <h2>Address</h2>
          <span>That street, Lagos. Nigeria</span>
        </motion.div> */}
        <motion.div variants={variants} className='item'>
          <h2>Phone</h2>
          <span>+234 903 519 8024</span>
        </motion.div>
      </motion.div>
      <motion.div className='formContainer'>
        <motion.div
          className='phoneSvg'
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            fill='transparent'
            // height='500px'
            // width='500px'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 512 512'
            xml:space='preserve'
            // strokeWidth={0.5}
            // initial={{ pathLength: 0 }}
            // whileInView={{ pathLength: 1 }}
            // transition={{ duration: 3 }}
          >
            <g>
              <g>
                <motion.path
                  strokeWidth={1}
                  initial={{ pathLength: 0 }}
                  animate={inView && { pathLength: 1 }}
                  transition={{ duration: 5 }}
                  d='M338.833,113.434l-25.6-25.6c-3.337-3.337-8.73-3.337-12.066,0L230.4,158.601l-19.567-19.567
			c-3.337-3.336-8.73-3.336-12.066,0l-25.6,25.6c-3.337,3.337-3.337,8.73,0,12.066l51.2,51.2c1.664,1.664,3.849,2.5,6.033,2.5
			c2.185,0,4.369-0.836,6.033-2.5l102.4-102.4C342.17,122.163,342.17,116.77,338.833,113.434z M230.4,209.801l-39.134-39.134
			l13.534-13.534l19.567,19.567c3.337,3.337,8.73,3.337,12.066,0l70.767-70.767l13.534,13.534L230.4,209.801z'
                />
              </g>
            </g>
            <g>
              <g>
                <motion.path
                  strokeWidth={1}
                  initial={{ pathLength: 0 }}
                  animate={inView && { pathLength: 1 }}
                  transition={{ duration: 7 }}
                  d='M494.933,145.067H383.565C379.145,78.464,323.703,25.6,256,25.6S132.855,78.464,128.435,145.067H17.067
			C7.654,145.067,0,152.721,0,162.133v307.2c0,9.412,7.654,17.067,17.067,17.067h477.867c9.412,0,17.067-7.654,17.067-17.067v-307.2
			C512,152.721,504.346,145.067,494.933,145.067z M256,42.667c61.167,0,110.933,49.766,110.933,110.933S317.167,264.533,256,264.533
			S145.067,214.767,145.067,153.6S194.833,42.667,256,42.667z M128.435,162.133C132.855,228.736,188.297,281.6,256,281.6
			s123.145-52.864,127.565-119.467h98.551L256,364.023L29.884,162.133H128.435z M17.067,173.577l158.566,141.577L17.067,457.856
			V173.577z M29.824,469.333l158.609-142.754l61.884,55.253C251.93,383.275,253.969,384,256,384s4.07-0.725,5.683-2.167
			l61.884-55.253l158.609,142.754H29.824z M494.933,457.856L336.367,315.145l158.566-141.568V457.856z'
                />
              </g>
            </g>
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type='text' required placeholder='Full Name' />
          <input type='email' required placeholder='Email' />
          <textarea rows={10} placeholder='Message' />
          <button>Send</button>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Contact
