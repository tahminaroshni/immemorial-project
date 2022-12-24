import { useRef } from 'react';
import { useGsapSectionTitleReveal } from '../hooks/gsap';
import Blog from './Blog';

const FavouritesBlog = ({ needFullHeight }) => {
  const blogs = [
    {
      id: 1,
      src: 'https://lh3.googleusercontent.com/oxgNm72K48xjLbjRrt8lqUpvb4oa8Y9FuPDZiP3TEx47O1HgAbEzQRKTMBXY58JUptsQ2NQhZ4cosIrlJurwNmQ28CQ=w500-rw',
      title: 'Pen fight',
      description: "No one 90s kid has cross their school life without playing a game of 'pen fight', 'thumb fight' and 'red hands' with their gang."
    },
    {
      id: 2,
      src: 'https://lh3.googleusercontent.com/F1QYl0lT3AIfz_bLqgjVu_e-PkivcD6ObI_pGQib39qqUo_9C_YZkSPw7sDtM8mPjYEmTSpJMsJtkpfVvimqaOi0KA=w500-rw',
      title: 'Yashica camera',
      description: 'Much much before these fancy smart phone cameras, SLRs and DSLRs, the world of a 90s kid saw a Yashica reel camera. One needed to be careful, effective and efficient while using it because of the limited number of pictures a reel could click at a time. '
    },
    {
      id: 3,
      src: 'https://lh3.googleusercontent.com/z0olh83nMQkuLG_80QoUhK8OrRzxfpA4Q_hf7-VJ09EAg7S5IDQlY5cdFpi87gQh3zMPH8IYRkD_qB6_eQfW520Ujw=w500-rw',
      title: 'Comics',
      description: "A 90s kid didn't know what boredom feels like even during their long train journeys, thanks to comics like Archies, Champak, Chacha Chaudhary, Nandan, Pinki, Bittu, Suppandi, etc. "
    },
    {
      id: 4,
      src: 'https://i0.wp.com/catchupdates.com/wp-content/uploads/2015/01/90s-born-childhood-memories.jpg?w=485&ssl=1',
      title: 'Video Games',
      description: 'Video games used to be the best time pass for our generation. I remember playing Contra, Mario like hell.'
    },
    {
      id: 5,
      src: 'https://lh3.googleusercontent.com/fnyn9kpPHKv3tIe6EwEPYRqUl5iZ7xTeUbl2enPqpN1_lL5hk_dwtHSVM1XW8SFIm19qe0MWS5y8cS86K4M42mS6Ic8=w500-rw',
      title: ' TV shows',
      description: 'Shreeman-Shreemati, Shaktiman, Small Wonder and Dekh Bhai Dekh are some of the unforgettable TV shows of the 90s. '
    },
    {
      id: 6,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxtXYpOCQLGGvCAezmhEImQR0oWm_JOI-vA&usqp=CAU',
      title: 'Friends',
      description: "Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama."
    },
    {
      id: 7,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_v5TBBT5J7yu9a-1oG79IyzeKozzbtZyWg&usqp=CAU',
      title: 'Landlines',
      description: 'Remember gossiping with your best bud over those fat ugly landline phones for hours even after getting scolded by your mum? Well, we feel you. What fun are WhatsApp and Messengers? Sigh. '
    },
    {
      id: 8,
      src: 'https://the-motherload.co.uk/wp-content/uploads/2017/09/rsz_tape.jpg',
      title: 'Old audio cassette',
      description: 'Photo about Old audio cassette 90s of production. The memory of the past'
    },
  ];
  //['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt69Bqem3B07z-KglB6u6vksuhg6AW7_UkNA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcl-DAbnz2eZIvutBB4EQy7VkhLSz8u2QbXQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHqaoOUN5d2ATXHAOLlU4QwqmQ4-_z9zpNA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxtXYpOCQLGGvCAezmhEImQR0oWm_JOI-vA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSXe8-eMZHvsFHnQEtqa__IIHi8tCcC2rRg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBcoKMC0oGesJoJR_ypkQY3SXzWMYvrFb6g&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5pFkp80Z1lxfWCWVIt24EtU7_WcqDHOrJg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkja5698DYAoQ9L4pm0B5jHOlFrJx0nP61N0adbRO-w-h78WdVUp5sQr2eq5KvUXPttk&usqp=CAU']

  const blogsRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useGsapSectionTitleReveal(sectionTitleRef, blogsRef);

  return (
    <section className={`${needFullHeight && "min-h-100vh"} wrapper`} ref={blogsRef}>
      <h2 className='section-title' ref={sectionTitleRef}>Blogs</h2>
      <div className="blogs">
        {
          blogs.map((blog) => <Blog key={blog.id} blog={blog} />)
        }
      </div>
    </section>
  );
};

export default FavouritesBlog;