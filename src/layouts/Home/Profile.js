import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi !" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Venkata Sai Yakkshit Reddy Asodi! Recently, I graduated from Blekinge Institute of Technology and I'm currently working as a Fullstack Developer at <Link href="https://cedzlabs.com">Cedzlabs</Link>. Along my journey, I've achieved various <Link href="https://www.linkedin.com/in/yakkshit/details/certifications/">certifications</Link>, including MTA-Python and Java, and completed the <Link href="">GCP Cloud</Link> Carrier Path, <Link href="https://www.linkedin.com/in/yakkshit/details/certifications/">among others</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm incredibly excited to share my professional journey with you. 
      Over the years, I've had the privilege of working on a wide range of exciting projects that have not only sharpened my skills but also broadened my perspective. 
      One particular standout experience was my participation in the prestigious Devfest organized by the Google Developers Club. 
      It was a transformative event that truly pushed my boundaries and took my abilities to new heights.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      During the Devfest, I had the amazing opportunity to fully immerse myself in the captivating world of Google Cloud services and APIs. 
      Building a Google Assistant from scratch, harnessing the cutting-edge technology offered by Google, was an exhilarating challenge. 
      This process not only rewarded me with an incredible sense of accomplishment but also provided me with invaluable education, 
      honing my creativity and problem-solving skills.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      If you're curious to witness the tangible outcomes of my endeavors and explore the diverse range of <Link href="/uses">skills</Link> I've developed along the way, 
      I cordially invite you to delve deeper into <Link href="https://yakkshit.com">my portfolio</Link>. You'll find an impressive showcase of my project.
    </Text>
    <Text className={styles.description} data-visible={visible} size='l' as='p'>
      So, why wait any longer? Let's embark on this interactive journey together and dive headfirst into the boundless world of technology and innovation. 
      If you have any questions or if you're interested in collaborating on future projects, please don't hesitate to <Link href="mailto:saiyakkshit2001@gmail.com">reach out</Link>. 
      Together, let's make a significant difference in the world of technology and forge a brighter future! 🚀
    </Text>



    {/* <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Venkata Sai Yakkshit Reddy Asodi, Recently Graduated from Blekinge Instuite of Technology and Working as a Fullstack Developer at{' '}
      <Link href="https://www.cedzlabs.com">cedzlabs</Link>. I have completed various certifications, 
      such as MTA-Python and Java, 
      and GCP Cloud Carrier Path and <Link href="https://www.linkedin.com/in/yakkshit/details/certifications/">more</Link>. 
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm thrilled to share my journey with you. Over the years, I've had the opportunity to work on numerous exciting projects that have honed my skills and expanded my horizons. One of the highlights was my participation in the Devfest of the Google Developers Club, an incredible experience that pushed me to new heights.
      During the Devfest, I had the chance to immerse myself in the world of Google Cloud services and APIs. It was an exhilarating challenge as I built a Google Assistant from scratch, leveraging the power of Google's cutting-edge technology. The process was both rewarding and educational, allowing me to unleash my creativity and problem-solving skills.
      If you're curious to see what I've accomplished and the <Link href="/uses">skills</Link> I've developed along the way, I invite you to explore my profile further. You'll find a showcase of my <Link href="/project-1">projects</Link>, highlighting my dedication, passion, and commitment to delivering outstanding results.
      So, what are you waiting for? Let's embark on this interactive journey together and dive into the world of technology and innovation. Feel free to reach out if you have any questions or if you're interested in collaborating on future projects. Let's make a difference together! 🚀
    </Text> */}
    {/* <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to practice play Volleyball, and{' '}
      <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing
      about new projects, so feel free to drop me a line.
    </Text> */}
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standin near BTH college"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
