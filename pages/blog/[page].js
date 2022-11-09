import { useRouter } from "next/router";
import React from "react";
import Navbar from "../component/Navbar";
import styles from "./blog.module.css";
function page() {
  const data = useRouter();
  console.log(data.query.page);
  return (
    <>
      <Navbar />
      <div className={styles.mainbox}>
        <div className={styles.postinfobox}>
          <div className={styles.tit}>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            </h1>
          </div>
          <div className={styles.user}>
            <div className="auther">Post By : Sourav</div>
            <div className="date">02/11/2001</div>
          </div>
        </div>
        <div className={`${styles.postinfobox} ${styles.content}`}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            ipsum assumenda quam nostrum iure perferendis culpa maxime
            <br />
            <img src="/post.png" width="100%" />
            asperiores dignissimos autem blanditiis animi fuga ipsa excepturi
            quod, itaque corporis. Asperiores cum quidem alias sequi, saepe
            illo. Numquam aut at dicta necessitatibus perspiciatis quam quis
            sunt quaerat. Commodi quod iste autem perferendis odio. Rerum rem
            numquam pariatur animi unde cupiditate cum possimus iure
            exercitationem nisi aliquid distinctio ipsam deleniti, magnam quia!
            Repellendus natus earum provident perferendis sapiente repellat,
            tenetur omnis obcaecati corrupti, fugit error delectus a dolorum
            esse, accusamus nihil hic labore explicabo eos? Earum laboriosam
            porro quia blanditiis molestias exercitationem vero. Dolorem
            quisquam labore et beatae blanditiis obcaecati fuga consequatur,
            asperiores sint totam, culpa, veniam dignissimos soluta possimus!
            Quasi, perspiciatis excepturi! Odio minus vel iste, quam corrupti ut
            minima maxime numquam sapiente! Distinctio, doloremque aliquam saepe
            minima sit mollitia nulla molestiae nobis voluptate ab labore
            dignissimos quibusdam odit quidem excepturi neque aut sunt
            consectetur amet. Molestiae expedita dolor porro odio quos debitis
            voluptates placeat provident, recusandae atque, voluptatibus
            facilis, tempora ex adipisci. Molestias error rem eius quam quae
            distinctio facere, animi, similique illo a deleniti. Repudiandae
            atque tempora accusamus deleniti nostrum, culpa deserunt? Ipsam
            officia nobis saepe quas, perspiciatis suscipit. Aliquam aperiam
            mollitia rem consectetur vitae quaerat voluptate ea accusantium
            sapiente, quisquam corrupti consequatur delectus magnam nemo illum
            totam odit pariatur dolore ullam ut? Ut quia, vero cumque nam,
            laudantium maiores nostrum, aspernatur voluptatum non consectetur
            accusamus aut. Soluta totam, voluptatibus, deleniti natus eos sed,
            consequatur iure earum voluptate nihil nisi animi molestiae at
            eligendi esse inventore ut tempore aliquid voluptas eum nobis.
            Beatae aliquid sunt eius asperiores reprehenderit fugit magni dolore
            cupiditate, neque eum totam eos ducimus temporibus, autem quod ipsum
            odio. A quam nam beatae enim voluptate repellat, facere temporibus
            molestiae pariatur sequi nesciunt dolore laudantium. Atque accusamus
            minus quae. Voluptatum atque sit quisquam suscipit repellat, labore
            esse eaque cupiditate eius similique qui dolore consectetur vel
            nesciunt praesentium commodi distinctio. Officiis minus neque sed?
            Saepe id alias eaque assumenda animi, magnam commodi error
            perspiciatis aliquid reprehenderit corporis quidem accusamus quis
            atque perferendis pariatur eligendi tempora esse dolorum? Dolor
            sapiente officiis ad voluptas fugit cupiditate omnis doloribus,
            nesciunt fugiat obcaecati perspiciatis itaque nam alias ea,
            voluptatum necessitatibus odio dolores laboriosam veritatis? Iure
            aperiam facilis, possimus nemo fugit eum commodi, natus accusantium
            rem quas repellendus laborum quisquam, officia totam doloremque
            illum? Recusandae nihil minima numquam ea doloremque cumque natus
            eius, atque repudiandae illum maxime reiciendis laboriosam porro,
            corrupti amet accusantium fuga dolor veniam aperiam voluptas. Modi
            nam aspernatur saepe, magnam quas voluptas vel voluptate quod
            possimus recusandae culpa quo, nemo cumque doloremque natus
            consectetur? Esse, nemo ipsa? Velit nostrum beatae fuga accusamus
            odio. Minus eum dicta iste corrupti sint, voluptas neque placeat
            excepturi tempora quaerat nemo explicabo atque optio totam vel
            fugiat nihil ducimus! Cumque, magni! Fuga, corporis! Consequatur
            quos ut fugiat, blanditiis expedita culpa eveniet deserunt nobis
            labore eaque corrupti, soluta praesentium error eos obcaecati
            similique laboriosam ex eligendi eius nesciunt optio maiores magni.
            Sequi dolorum voluptate explicabo fugit molestiae alias consectetur
            perspiciatis. Qui architecto ipsum culpa placeat veniam aspernatur
            corporis, accusantium eum ad deserunt molestias distinctio eos
            consequuntur magni sed? Maxime eligendi dolore consectetur eveniet
            pariatur, ipsa doloribus mollitia fugiat consequatur officia, vel
            minus exercitationem ut enim soluta sit voluptatem quod iusto?
            Distinctio quibusdam quae iure ad nihil minima tempora enim
            recusandae dignissimos officia, cum similique labore cupiditate
            quasi vero fugiat facilis atque voluptatibus optio aspernatur soluta
            quis, aliquam exercitationem. Enim voluptates aperiam, quisquam
            voluptas odio ullam amet dolorum officia, maiores aspernatur
            reiciendis adipisci similique, repellat ducimus delectus vel quod?
            Neque quia unde, nesciunt vero explicabo ullam saepe! Necessitatibus
            esse cupiditate enim laboriosam odio aperiam id, reprehenderit
            expedita aut facere nihil quibusdam eius mollitia corrupti voluptas
            nulla autem fuga similique harum sit dolor recusandae. Sed molestiae
            adipisci cupiditate in earum accusantium reiciendis veniam tenetur
            consectetur. Rerum reprehenderit quas, expedita consequatur facilis
            aspernatur at doloribus fugiat sunt laudantium nam, et temporibus
            beatae ab dignissimos iure, incidunt vel nesciunt earum ipsum! Quis
            dolores, consequuntur commodi perferendis officia quam! Commodi
            placeat hic ducimus inventore, quidem, laborum nostrum soluta quas
            tempore suscipit non eligendi quaerat eos quos enim totam quasi qui
            nihil ab velit rem eius dignissimos optio. Velit nisi rem nostrum
            maxime, ut doloribus obcaecati optio blanditiis vitae. Blanditiis
            esse suscipit eaque asperiores voluptates tempore veniam
            reprehenderit voluptas, repellat delectus omnis, distinctio in dicta
            voluptatibus labore natus! Quidem fugiat expedita ea at, similique
            impedit dolore cumque voluptates harum, officia quasi amet nobis
            obcaecati doloremque eaque quaerat excepturi esse qui! Alias fugiat
            assumenda cum natus quas velit dolores sequi voluptate magni. Nulla
            error dolorem veritatis ducimus quam quos delectus magnam eos culpa
            commodi. Illo nisi accusantium, eum facilis assumenda dicta
            veritatis voluptatum consectetur? Officiis voluptas dolores nulla
            quo! Ea, neque omnis! Odio asperiores voluptatum doloremque ducimus,
            voluptatibus culpa rerum? Reprehenderit a beatae vel earum expedita
            cumque adipisci nam ipsam ex aperiam placeat, ullam laudantium fugit
            architecto praesentium laborum, officia ipsum accusamus nihil!
            Repellendus esse modi odit possimus veritatis nam ut expedita
            aspernatur ratione perspiciatis impedit dicta rerum, molestiae,
            mollitia, incidunt debitis eveniet nobis quidem obcaecati ea
            laudantium. Quam incidunt inventore delectus architecto laborum
            voluptate perferendis asperiores est accusantium. Officiis veritatis
            laudantium rerum necessitatibus cupiditate rem qui ut sed possimus,
            ex, alias omnis? Quibusdam, excepturi. Reiciendis labore vero
            maiores quidem commodi, dolor facilis praesentium facere culpa
            architecto. Doloribus ad accusamus hic at sunt asperiores dolorum in
            eius amet eligendi quam explicabo, labore, ducimus repellendus sit
            vero dolores quae nesciunt! Corporis dolor deleniti voluptatibus
            excepturi, earum dignissimos officia nesciunt! Officiis veritatis
            rerum doloremque eos eum fuga asperiores id harum hic ipsum iste,
            excepturi odit ipsam quibusdam atque? Exercitationem reiciendis
            cupiditate odio perferendis impedit? Aspernatur, quasi? Sit aliquam,
            expedita doloremque, officia ab fugiat, quisquam porro veritatis
            cumque voluptas delectus eveniet velit saepe debitis? Ab quisquam ea
            voluptate consequuntur nostrum aliquam saepe totam impedit, veniam
            perferendis voluptatum quis consectetur, ex omnis accusantium
            assumenda iste odio consequatur repellendus recusandae ipsa illum
            at? Id beatae earum a alias optio quas, facere deleniti voluptates
            quaerat aliquid, praesentium aperiam culpa assumenda!
          </p>
        </div>
      </div>
    </>
  );
}

export default page;
