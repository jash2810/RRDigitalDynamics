import { Box, Grid, Modal, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import Blog from "../../Images/Blog.png";
import "./Blog.css";
import PageSectionTitle from "../../Components/PageSectionTitle/PageSectionTitle";
import BlogCard from "./BlogCard/BlogCard";
import Blog1 from '../../Images/blog1.png';
import CloseIcon from '@mui/icons-material/Close';

// style for Modal
const style = {
  position: 'absolute',
  width: '100% !important',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

let data = [
  {
    title: "The Essential Guide to Social Media Marketing",
    statement: "Learn how to leverage social media platforms like Facebook, Instagram, and Twitter to engage with your audience, build brand awareness, and drive conversions.",
    image: Blog1,
    date: "July 2, 2024",
    readMore: <div>
              <p>In today’s digital age, social media marketing is essential for any successful business strategy. With billions of active users, social media offers opportunities to connect with potential customers, build brand awareness, and drive sales.</p>

              <p>Understanding the nuances of each platform is crucial:</p>
              <p><strong>Facebook</strong> is ideal for community building and engaging with a broad audience. <strong>Instagram</strong> is perfect for brands that leverage high-quality visuals. <strong>Twitter</strong> is great for real-time updates and conversations. <strong>LinkedIn</strong> is the go-to platform for B2B marketing. <strong>TikTok</strong> is growing rapidly, especially among younger audiences, with its short-form video format.</p>

              <p>To develop a social media strategy:</p>
              <p>1. <strong>Set Clear Objectives:</strong> Define your goals.</p>
              <p>2. <strong>Identify Your Target Audience:</strong> Understand their preferences.</p>
              <p>3. <strong>Content Planning and Creation:</strong> Organize a content calendar.</p>
              <p>4. <strong>Engagement and Interaction:</strong> Respond to comments and messages.</p>
              <p>5. <strong>Analytics and Adjustments:</strong> Review performance and adjust strategies.</p>

              <p>Best practices include maintaining consistency, focusing on quality, leveraging visuals, using hashtags, and staying updated on trends.</p>

              <p>By understanding platforms, developing a clear strategy, and following best practices, you can effectively engage your audience and achieve your marketing goals.</p>
            </div>
  },
  {
    title: "Mastering Pay-Per-Click Advertising",
    statement: "Dive into the world of PPC advertising and discover how to create effective campaigns that deliver high ROI. We'll cover keyword research, ad copywriting, targeting strategies, and more.",
    image: Blog1,
    date: "July 2, 2024",
    readMore: <div>
                <p>Pay-Per-Click (PPC) advertising is a powerful tool for driving targeted traffic to your website. By mastering PPC, businesses can achieve significant growth and a high return on investment.</p>

                <p>PPC works by placing ads on search engines and other platforms, with advertisers paying a fee each time their ad is clicked. The most popular PPC platform is Google Ads, but others include Bing Ads and social media platforms like Facebook and LinkedIn.</p>

                <p>To master PPC advertising, start with thorough keyword research. Identify the keywords your target audience is searching for and choose those with high relevance and reasonable competition. Craft compelling ad copy that includes a strong call to action, ensuring your ads stand out and attract clicks.</p>

                <p>Setting a budget and bidding strategy is crucial. Decide how much you’re willing to spend and choose between manual or automated bidding to control your ad placements and costs effectively. Regularly monitor your campaigns to track performance and adjust bids, keywords, and ad copy as needed.</p>

                <p>Use A/B testing to compare different versions of your ads and landing pages, optimizing for better results. Additionally, leverage advanced targeting options to reach the right audience based on demographics, location, and device.</p>

                <p>By focusing on these strategies, you can master PPC advertising and drive high-quality traffic to your website, boosting your business’s online presence and sales.</p>
              </div>

  },
  {
    title: "Demystifying SEO",
    statement: "Get to grips with search engine optimization and learn proven techniques to improve your website's visibility in search engine results pages (SERPs). From on-page optimization to link building, we'll cover it all.",
    image: Blog1,
    date: "July 2, 2024",
    readMore: <div>
                <p>Search Engine Optimization (SEO) is a crucial component of digital marketing, aimed at improving a website’s visibility on search engines like Google. By understanding and implementing SEO strategies, businesses can attract more organic traffic and increase their online presence.</p>

                <p>SEO can be broken down into three main areas:</p>
                <p><strong>On-Page SEO:</strong> This involves optimizing individual web pages to rank higher and earn more relevant traffic. Key elements include using targeted keywords, creating high-quality content, optimizing meta tags, and ensuring mobile-friendliness.</p>

                <p><strong>Off-Page SEO:</strong> This focuses on activities outside your website that impact your ranking. Building high-quality backlinks from reputable sites, social media marketing, and influencer outreach are essential components of off-page SEO.</p>

                <p><strong>Technical SEO:</strong> This involves optimizing the backend structure of your site. Ensuring fast load times, secure connections (HTTPS), a well-structured site map, and resolving crawl errors help search engines index your site efficiently.</p>

                <p>Effective SEO is an ongoing process. Regularly updating content, monitoring performance with tools like Google Analytics, and staying current with search engine algorithm changes are essential practices.</p>

                <p>By demystifying SEO and implementing these strategies, businesses can enhance their visibility, drive more traffic, and achieve better online success.</p>
              </div>

  },
  {
    title: "The Importance of Responsive Web Design",
    statement: "In today's mobile-first world, having a responsive website is crucial. Find out why responsive web design matters for user experience, SEO, and conversion rates, and learn how to optimize your site for all devices.",
    image: Blog1,
    date: "July 2, 2024",
    readMore: <div>
                <p>In today’s digital world, the importance of responsive web design cannot be overstated. With the increasing use of smartphones, tablets, and other mobile devices, users expect websites to provide a seamless experience across all screen sizes. Responsive web design ensures that websites adapt to various devices, offering an optimal viewing experience.</p>

                <p>One of the primary benefits of responsive web design is improved user experience. A responsive website automatically adjusts its layout, images, and content to fit the screen size of the device being used. This means users do not have to zoom in or scroll horizontally to view content, leading to higher satisfaction and longer site visits.</p>

                <p>Additionally, responsive web design is essential for SEO. Search engines, like Google, prioritize mobile-friendly websites in search results. A responsive design helps improve search engine rankings, driving more organic traffic to the site. It also simplifies website management since a single responsive site eliminates the need for separate desktop and mobile versions.</p>

                <p>Furthermore, responsive web design enhances accessibility. It ensures that all users, regardless of their device, can access and navigate the website easily. This inclusivity is crucial for reaching a broader audience and ensuring compliance with accessibility standards.</p>

                <p>In conclusion, responsive web design is vital for delivering a consistent user experience, improving SEO, simplifying website management, and ensuring accessibility. Investing in responsive design is essential for staying competitive in the digital landscape.</p>
              </div>,
  },
  {
    title: "Building Your Online Presence",
    statement: "Explore strategies for enhancing your online presence across various digital channels. From content marketing to email campaigns, we'll share tips for attracting and engaging your target audience.",
    image: Blog1,
    date: "July 2, 2024",
    readMore: <div>
                <p>Building a strong online presence is crucial for individuals and businesses in today's digital world. It involves creating and maintaining a positive, consistent image across various online platforms to connect with a wider audience and achieve your goals.</p>
                
                <p>Start by creating a professional website that showcases your brand, services, or products. Ensure it is user-friendly, mobile-responsive, and optimized for search engines (SEO) to attract organic traffic.</p>
                
                <p>Next, establish profiles on relevant social media platforms like Facebook, Instagram, LinkedIn, and Twitter. Consistently post valuable content that reflects your brand’s voice and engages your audience. Use high-quality images, videos, and graphics to capture attention and foster interaction.</p>
                
                <p>Blogging is another effective way to build your online presence. Regularly publish informative and engaging posts that provide value to your audience and position you as an authority in your field. Incorporate SEO strategies to improve visibility and attract more readers.</p>
                
                <p>Email marketing can also enhance your online presence. Build a mailing list and send regular newsletters to keep your audience informed and engaged with your latest updates, promotions, and content.</p>
                
                <p>Finally, monitor your online reputation by regularly checking reviews, comments, and feedback. Respond promptly and professionally to build trust and show that you value your audience’s opinions.</p>
                
                <p>By creating a cohesive and engaging online presence, you can effectively reach and connect with your target audience, build credibility, and achieve your goals.</p>
              </div>,
  }
];


function BlogPage() {
  const theme = useTheme();

  const [readMoreData, setReadMoreData] = useState();
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false)

  function readMoreClicked(data, title) {
    setOpen(true)
    setReadMoreData(data);
    setTitle(title)
  }

  function setModalClose() {
    setOpen(false);
    setReadMoreData();
    setTitle('')
  }


  return (
    <div>
      <div
        className="image_wrapper_blog"
        style={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <img
          src={Blog}
          alt=""
          className="rrwhite-blg"
        />
      </div>
      <div className="blog-page-content">
        <PageSectionTitle pageTitle={'Latest Articles'} />
        <div className="blogs-wrapper">
          <Grid container style={{width: '90%', margin: 'auto'}} spacing={3}>
            {data.map((b, index) => {
              return(
                <Grid item md={4}>
                  <BlogCard 
                    title={b.title}
                    statement={b.statement}
                    image={b.image}
                    date={b.date}
                    id={index}
                    readMore={b.readMore}
                    readMoreClicked={readMoreClicked}
                  />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='modal-box'>
          <span><CloseIcon style={{color: 'red'}} className="close-icon" onClick={() => {setModalClose()}}></CloseIcon></span>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {readMoreData}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BlogPage;
