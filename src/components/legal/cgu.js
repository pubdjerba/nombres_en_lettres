import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Cgu = () => {
  const { title } = useSiteMetadata()

  return (
    <div>
      <h1>Conditions d’utilisation</h1>
      <h4>Date de dernière mise à jour : 20 Novembre 2022</h4>
      <h3>ARTICLE 1 : PRESENTATION DU SITE</h3>
      <p>
        Le site <b>{title}</b> a pour objet : fournir aux utilisateurs un outil
        gratuit pour conversion les chiffres en lettres.
      </p>
      <h3>ARTICLE 2 : CONTACT</h3>
      <p>
        Pour toute question ou demande d'information concernant le site, ou tout
        signalement de contenu ou d'activités illicites, l'utilisateur peut
        contacter l'éditeur en remplissant le formulaire de contact.
      </p>
      <h3>ARTICLE 3 : ACCEPTATION DES CONDITIONS</h3>
      <p>
        L'accès et l'utilisation du site sont soumis à l'acceptation et au
        respect des présentes conditions générales d'utilisation. L'éditeur se
        réserve le droit de modifier, à tout moment et sans préavis, le site et
        les présentes conditions générales d'utilisation, notamment pour
        s'adapter aux évolutions du site par la mise à disposition de nouvelles
        fonctionnalités ou la suppression ou la modification de fonctionnalités
        existantes. Il est donc conseillé à l'utilisateur de se référer avant
        toute navigation à la dernière version des conditions générales
        d'utilisation, accessible à tout moment sur le site. En cas de désaccord
        avec les conditions générales d'utilisation, aucun usage du site ne
        saurait être effectué par l'utilisateur.
      </p>
      <h3>ARTICLE 4 : ACCES ET NAVIGATION</h3>
      <p>
        L'éditeur met en oeuvre les solutions techniques à sa disposition pour
        permettre l'accès au site 24 heures sur 24, 7 jours sur 7. Il pourra
        néanmoins à tout moment suspendre, limiter ou interrompre l'accès au
        site ou à certaines pages de celui-ci afin de procéder à des mises à
        jour, des modifications de son contenu ou tout autre action jugée
        nécessaire au bon fonctionnement du site. La connexion et la navigation
        sur le site {title} valent l'acceptation sans réserve des présentes
        conditions générales d'utilisation, quelques soient les moyens
        techniques d'accès et les terminaux utilisés. Les présentes conditions
        générales d'utilisation s'appliquent, en tant que de besoin, à toute
        déclinaison ou extension du site sur les réseaux sociaux et/ou
        communautaire.
      </p>
      <h3>ARTICLE 5 : GESTION DU SITE</h3>
      <p>Pour la bonne gestion du site, l'éditeur pourra à tout moment :</p>
      <ul>
        <li>
          Suspendre, interrompre ou limiter l'accès à tout ou partie du site,
          réserver l'accès au site, ou à certaines parties du site, à une
          catégorie déterminée d'internaute(s) ;
        </li>

        <li>
          Supprimer toute information pouvant en perturber le fonctionnement ou
          entrant en contravention avec les lois nationales ou internationales
          en vigueur ;
        </li>

        <li> Suspendre le site afin de procéder à des mises à jour.</li>
      </ul>
      <h3>ARTICLE 6 : RESPONSABILITES </h3>
      <p>
        L'éditeur n'est responsable que du contenu qu'il a lui-même édité.
        L'éditeur n'est pas responsable :
      </p>
      <ul>
        <li>
          En cas de problématique ou défaillance techniques, informatiques ou de
          compatibilité du site avec un matériel ou logiciel quel qu'il soit ;
        </li>
        <li>
          Des dommages directs ou indirects, matériels ou immatériels,
          prévisibles ou imprévisibles résultant de l'utilisation ou des
          difficultés d'utilisation du site ou des services ;
        </li>
        <li>
          Des caractéristiques intrinsèques de l'internet, notamment celles
          relatives au manque de fiabilité et au défaut de sécurisation des
          informations y circulant ;
        </li>
        <p>
          Des contenus ou activités illicites utilisant son site et ce, sans
          qu'il en ait pris dûment connaissance. Par ailleurs, le site ne
          saurait garantir l'exactitude, la complétude, et l'actualité des
          informations qui y sont diffusées.
        </p>
      </ul>
      L'utilisateur est responsable :
      <ul>
        <li>De la protection de son matériel et de ses données ;</li>

        <li> De l'utilisation qu'il fait du site ou de ses services ;</li>

        <li>
          S'il ne respecte pas les présentes conditions générales d'utilisation.
        </li>
      </ul>
      <h3>ARTICLE 7 : LIENS HYPERTEXTES </h3>
      <p>
        Le site peut contenir des liens hypertextes pointant vers d'autres sites
        internet sur lesquels [tonsite.com] n'exerce pas de contrôle. Malgré les
        vérifications préalables et régulières réalisés par l'éditeur, celui-ci
        décline toute responsabilité quant aux contenus qu'il est possible de
        trouver sur ces sites. L'éditeur autorise la mise en place de liens
        hypertextes vers toute page ou document de son site sous réserve que la
        mise en place de ces liens ne soit pas réalisés à des fins commerciales
        ou publicitaires En outre, l'information préalable de l'éditeur du site
        est nécessaire avant toute mise en place de lien hypertexte. Sont exclus
        de cette autorisation les sites diffusant des informations à caractère
        illicite, violent, polémique, pornographique, xénophobe ou pouvant
        porter atteinte à la sensibilité du plus grand nombre. Enfin,
        {title} se réserve le droit de faire supprimer à tout moment un lien
        hypertexte pointant vers son site, si l'éditeur l'estime non conforme à
        sa politique éditoriale.
      </p>
      <h3>ARTICLE 8 : COOKIES</h3>
      <p>
        Le site a recours aux techniques de "cookies" lui permettant de traiter
        des statistiques et des informations sur le trafic, de faciliter la
        navigation et d'améliorer le service pour le confort de l'utilisateur,
        lequel peut s'opposer à l'enregistrement de ces "cookies" en configurant
        son logiciel de navigation.
      </p>
      <h3>ARTICLE 9 : PROPRIETE INTELLECTUELLE</h3>
      <p>
        La structuration du site mais aussi les textes, graphiques, images,
        photographies, sons, vidéos et applications informatiques qui le
        composent sont la propriété de l'éditeur et sont protégés comme tels par
        les lois en vigueur en Europe. Et ce, à l'exception des éléments
        expressément désignés comme libres de droits sur le site ou par
        l'éditeur. L'accès au site ne vaut pas reconnaissance d'un droit et, de
        manière générale, ne confère aucun droit de propriété intellectuelle
        relatif à un élément du site, lesquels restent la propriété exclusive de
        l'éditeur. Il est interdit à l'utilisateur d'introduire des données sur
        le site qui modifieraient ou qui seraient susceptibles d'en modifier le
        contenu ou l'apparence.
      </p>
    </div>
  )
}

export default Cgu
