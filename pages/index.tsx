import Head from 'next/head'
import styles from '../styles/Home.module.scss'

type Post = {

}

async function getPosts() {
  
}

export const getStaticProps = async ({ params}) => {
    const posts = await getPosts()
    return{
       props: {posts}
    }
} 

const Home: React.FC<{ posts: Post[] }> = {props} => {
  
  return <div className={styles.container}></div>
}

export default Home
        
    
  

