import{g as ve,c as xe}from"./_commonjsHelpers-BosuxZz1.js";const ke={prefix:"fr",namespace:"dsfr",organisation:"@gouvfr"},N={config:ke},ye=`/* eslint-disable no-undef */
locals.includeAttrs = function (attrs) {
  let html = '';
  for (const prop in attrs) {
    switch (attrs[prop]) {
      case '':
      case null:
        html += \`\${prop} \`;
        break;

      case undefined:
        break;

      default:
        html += \`\${prop}="\${attrs[prop]}" \`;
    }
  }
  return html;
};

/* eslint-disable no-undef */
locals.includeClasses = function (classes) {
  if (classes !== undefined && classes.length > 0) return 'class="' + classes.join(' ') + '"';
  return '';
};
`,je='[{"name":"accessibility","category":"accessibility","path":"artwork/pictograms/accessibility/accessibility.svg"},{"name":"city-hall","category":"buildings","path":"artwork/pictograms/buildings/city-hall.svg"},{"name":"factory","category":"buildings","path":"artwork/pictograms/buildings/factory.svg"},{"name":"house","category":"buildings","path":"artwork/pictograms/buildings/house.svg"},{"name":"nuclear-plant","category":"buildings","path":"artwork/pictograms/buildings/nuclear-plant.svg"},{"name":"school","category":"buildings","path":"artwork/pictograms/buildings/school.svg"},{"name":"application","category":"digital","path":"artwork/pictograms/digital/application.svg"},{"name":"avatar","category":"digital","path":"artwork/pictograms/digital/avatar.svg"},{"name":"calendar","category":"digital","path":"artwork/pictograms/digital/calendar.svg"},{"name":"coding","category":"digital","path":"artwork/pictograms/digital/coding.svg"},{"name":"data-visualization","category":"digital","path":"artwork/pictograms/digital/data-visualization.svg"},{"name":"ecosystem","category":"digital","path":"artwork/pictograms/digital/ecosystem.svg"},{"name":"in-progress","category":"digital","path":"artwork/pictograms/digital/in-progress.svg"},{"name":"innovation","category":"digital","path":"artwork/pictograms/digital/innovation.svg"},{"name":"internet","category":"digital","path":"artwork/pictograms/digital/internet.svg"},{"name":"mail-send","category":"digital","path":"artwork/pictograms/digital/mail-send.svg"},{"name":"search","category":"digital","path":"artwork/pictograms/digital/search.svg"},{"name":"self-training","category":"digital","path":"artwork/pictograms/digital/self-training.svg"},{"name":"contract","category":"document","path":"artwork/pictograms/document/contract.svg"},{"name":"document-add","category":"document","path":"artwork/pictograms/document/document-add.svg"},{"name":"document-download","category":"document","path":"artwork/pictograms/document/document-download.svg"},{"name":"document-signature","category":"document","path":"artwork/pictograms/document/document-signature.svg"},{"name":"document","category":"document","path":"artwork/pictograms/document/document.svg"},{"name":"driving-licence","category":"document","path":"artwork/pictograms/document/driving-licence.svg"},{"name":"national-identity-card","category":"document","path":"artwork/pictograms/document/national-identity-card.svg"},{"name":"passport","category":"document","path":"artwork/pictograms/document/passport.svg"},{"name":"tax-stamp","category":"document","path":"artwork/pictograms/document/tax-stamp.svg"},{"name":"vehicle-registration","category":"document","path":"artwork/pictograms/document/vehicle-registration.svg"},{"name":"environment","category":"environment","path":"artwork/pictograms/environment/environment.svg"},{"name":"food","category":"environment","path":"artwork/pictograms/environment/food.svg"},{"name":"grocery","category":"environment","path":"artwork/pictograms/environment/grocery.svg"},{"name":"human-cooperation","category":"environment","path":"artwork/pictograms/environment/human-cooperation.svg"},{"name":"leaf","category":"environment","path":"artwork/pictograms/environment/leaf.svg"},{"name":"moon","category":"environment","path":"artwork/pictograms/environment/moon.svg"},{"name":"mountain","category":"environment","path":"artwork/pictograms/environment/mountain.svg"},{"name":"sun","category":"environment","path":"artwork/pictograms/environment/sun.svg"},{"name":"tree","category":"environment","path":"artwork/pictograms/environment/tree.svg"},{"name":"health","category":"health","path":"artwork/pictograms/health/health.svg"},{"name":"hospital","category":"health","path":"artwork/pictograms/health/hospital.svg"},{"name":"vaccine","category":"health","path":"artwork/pictograms/health/vaccine.svg"},{"name":"virus","category":"health","path":"artwork/pictograms/health/virus.svg"},{"name":"firefighter","category":"institutions","path":"artwork/pictograms/institutions/firefighter.svg"},{"name":"gendarmerie","category":"institutions","path":"artwork/pictograms/institutions/gendarmerie.svg"},{"name":"justice","category":"institutions","path":"artwork/pictograms/institutions/justice.svg"},{"name":"money","category":"institutions","path":"artwork/pictograms/institutions/money.svg"},{"name":"police","category":"institutions","path":"artwork/pictograms/institutions/police.svg"},{"name":"art","category":"leisure","path":"artwork/pictograms/leisure/art.svg"},{"name":"book","category":"leisure","path":"artwork/pictograms/leisure/book.svg"},{"name":"community","category":"leisure","path":"artwork/pictograms/leisure/community.svg"},{"name":"culture","category":"leisure","path":"artwork/pictograms/leisure/culture.svg"},{"name":"digital-art","category":"leisure","path":"artwork/pictograms/leisure/digital-art.svg"},{"name":"paint","category":"leisure","path":"artwork/pictograms/leisure/paint.svg"},{"name":"airport","category":"map","path":"artwork/pictograms/map/airport.svg"},{"name":"location-france","category":"map","path":"artwork/pictograms/map/location-france.svg"},{"name":"luggage","category":"map","path":"artwork/pictograms/map/luggage.svg"},{"name":"map","category":"map","path":"artwork/pictograms/map/map.svg"},{"name":"connection-lost","category":"system","path":"artwork/pictograms/system/connection-lost.svg"},{"name":"error","category":"system","path":"artwork/pictograms/system/error.svg"},{"name":"information","category":"system","path":"artwork/pictograms/system/information.svg"},{"name":"notification","category":"system","path":"artwork/pictograms/system/notification.svg"},{"name":"padlock","category":"system","path":"artwork/pictograms/system/padlock.svg"},{"name":"success","category":"system","path":"artwork/pictograms/system/success.svg"},{"name":"system","category":"system","path":"artwork/pictograms/system/system.svg"},{"name":"technical-error","category":"system","path":"artwork/pictograms/system/technical-error.svg"},{"name":"warning","category":"system","path":"artwork/pictograms/system/warning.svg"}]',we=`<% eval(include(root + 'src/dsfr/core/index.ejs')); %>
<%
let sampling = false;

function section (title, desc, spacing = '32v', container = false) {
  let sectionText = \`<div class="fr-mt-\${spacing}">\`;
  if (container) sectionText += \`<div class="fr-container">\`;
  if (title) sectionText += \`<h2>\${title}</h2>\`;
  if (desc) sectionText += \`<p>\${desc}</p>\`;
  if (container) sectionText += \`</div>\`;
  sectionText += \`</div>\`;
  return sectionText;
}

locals.section = section;

function deprecation () {
  return section('Dépréciation', '<span class="fr-icon-warning-fill"></span> Les exemples suivants sont dépréciés, ne pas utiliser comme référence<br>Pour support des versions précédentes');
}

locals.deprecation = deprecation;

function getSample (include, seed) {
  randomSeed(seed || 0);
  return (title, path, data, snippet, layout, layoutData) => {
    sampling = false;
    let component = include(path, { ...data });

    if (locals.noSnippet) snippet = undefined;

    if (snippet === true) {
      sampling = true;
      let html = include(path, { ...data, sampling: true });
      sampling = false;
      html = beautify(html);

      html = html.replace(/(class=".*)\\s(")/gm, '$1$2');
      html = html.replace(/&/g, '&amp;');
      html = html.replace(/</g, '&lt;');
      html = html.replace(/>/g, '&gt;');

      const accordion = {
        label: 'Extrait de code',
        id: uniqueId('snippet'),
        content: '<pre class=" language-html"><code>' + html + '</code></pre>'
      };

      snippet = include(root + 'src/dsfr/component/accordion/template/ejs/accordion', { accordion: accordion });
    }

    if (layout === undefined) layout = root + 'tool/example/layout';
    if (layoutData === undefined) layoutData = {};

    const sampleTitle = typeof (title) === 'string' ? title : title.title;
    const sampleSubtitle = typeof (title) === 'object' ? title.subtitle : undefined;

    return include(layout, {
      ...layoutData,
      title: sampleTitle,
      subtitle: sampleSubtitle,
      component: component,
      snippet: snippet
    });
  }
}

locals.getSample = getSample;

const lorem = (insert, length) => {
  let content = 'Lorem ';
  content += sampling ? '[...] ' : 'ipsum dolor sit amet, consectetur ';
  content += !sampling || insert ? 'adipiscing, ' : '';
  content += insert ? insert + ' ' : '';
  content += !sampling || insert ? 'incididunt, ' : '';
  content += !sampling ? 'ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing ' : insert ? '[...] ' : '';
  content += 'elit ut.';

  return content.substring(0, length);
}

locals.lorem = lorem;


const contentPlaceholder = (text) => {
  if (text === 'alt') text = 'texte alternatif de l’image';
  return \`[À MODIFIER - \${text}]\`;
};

locals.contentPlaceholder = contentPlaceholder;

const lengthen = (length, label) => {
  switch (length) {
    case 1:
      return label + ' long';

    case 2:
      return label + ' plus long';

    case 3:
      return label + ' beaucoup plus long';

    default:
      return label;
  }
}

locals.lengthen = lengthen;

const imgAltText = 'texte alternatif de l’image';
locals.imgAltText = imgAltText;

const brandData = (component = 'header', logo = true, service = false, operator = false, beta = false, href = '/') => {
  const data = {};
  const logoPlaceholder = 'Nom de l’entité (ministère, secrétariat d‘état, gouvernement)';
  const logoTitlePlaceholder = 'Intitulé<br>officiel';
  const logoPlaceholderOperator = 'République Française';
  const logoTitlePlaceholderOperator = 'République<br>Française';
  const operatorPlaceholder = imgAltText + ' : nom de l\\'opérateur ou du site serviciel';
  const servicePlaceholder = {
    title: 'Nom du site / service',
    tagline: 'baseline - précisions sur l‘organisation'
  };
  let titleLinkPlaceholder = 'Accueil';
  let position;
  if (component === 'footer') {
    titleLinkPlaceholder = 'Retour à l’accueil du site';
  }
  const fullTitle = [titleLinkPlaceholder];
  if (service) {
    fullTitle.push(contentPlaceholder(servicePlaceholder.title));
    switch (typeof service) {
      case 'boolean':
        data.service = servicePlaceholder;
        break;
      case 'string':
        switch (service) {
          case 'title':
            data.service = { title: servicePlaceholder.title };
            break
        }
        break;
      default:
        data.service = service;
    }
  }
  if (operator) {
    fullTitle.push(contentPlaceholder(operatorPlaceholder));
    switch (typeof operator) {
      case 'boolean':
        if (operator) data.operator = imgData('img/placeholder.16x9.png', 'rendered', null, null, 'max-width:10rem;');
        break;
      default:
        data.operator = operator;
    }
  }
  if (logo) {
    data.logo = {
      title: logoTitlePlaceholder
    };
    if (operator) {
      fullTitle.push(logoPlaceholderOperator);
      data.logo.title = logoTitlePlaceholderOperator;
    } else {
      fullTitle.push(logoPlaceholder);
    }
  }
  switch (true) {
    case service !== false :
      position = 'service';
      break;
    case operator !== false:
      position = 'operator';
      break;
    default:
      position = 'logo';
  }
  if (beta) {
    service ? data.service.beta = beta === true || undefined : data.service = beta ? { beta: beta } : undefined;
  }
  data.link = {
    position: position,
    href: href,
    title: fullTitle.join(' - ')
  };
  return data;
}

locals.brandData = brandData;

const imgData = (src, alt, ratio, comment, style) => {
  const data = {
    src: \`\${relativeRoot}example/\${src ? src : 'img/placeholder.16x9.png'}\`,
    alt: alt,
    comment: comment,
    ratio: ratio,
    style: style
  };
  return data;
}

locals.imgData = imgData;

const vidData = (src, title, ratio, attributes) => {
  const data = {
    src: src || 'https://www.youtube.com/embed/HyirpmPL43I',
    title: title || 'Titre de l\\'iframe',
    ratio: ratio,
    attributes: {
      allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: '',
      ...attributes
    }
  };
  return data;
}

locals.vidData = vidData;

const hintData = (hint) => {
  if (!hint) {
    return undefined;
  }
  switch (typeof hint) {
    case 'string':
      return hint;

    case 'boolean':
      if (hint) return locals.getText('hint', 'form');

    default:
      return undefined;
  }
}

locals.hintData = hintData;

const validData = (valid) => {
  if (!valid) {
    return undefined;
  }
  switch (typeof valid) {
    case 'string':
      return valid;

    case 'boolean':
      if (valid) return locals.getText('message.valid', 'form');

    default:
      return undefined;
  }
}

locals.validData = validData;

const errorData = (error) => {
  if (!error) {
    return undefined;
  }
  switch (typeof error) {
    case 'string':
      return error;

    case 'boolean':
      if (error) return locals.getText('message.error', 'form');

    default:
      return undefined;
  }
}

locals.errorData = errorData;

const getBlankTitle = (title = contentPlaceholder('Intitulé')) => {
  return \`\${title} - \${locals.getText('blank')}\`;
}

locals.getBlankTitle = getBlankTitle;

const randomSeed = (seed) => {
  const rng = prand.xoroshiro128plus(seed);
  locals.rng = rng;
}

const randomContent = (types = ['title', 'img', 'text', 'list'], id) => {
  let content = '<!-- données de test -->';
  if (sampling) return content;
  content += \`<div>\`;
  if (types.includes('title')) {
    content += \`<h4 class="\${prefix}-h4" >Contenu \${id || ''}</h4>\`;
  }
  if (types.includes('img')) {
    if (prand.unsafeUniformIntDistribution(0, 10, locals.rng) < 4) content += include(root + 'src/dsfr/core/template/ejs/media/responsive-img.ejs', {media: imgData()});
  }
  if (types.includes('text')) {
    for (let i = prand.unsafeUniformIntDistribution(0, 1, locals.rng); i > 0; i--) content += \`<p>\${lorem('<a href="https://www.systeme-de-design.gouv.fr/" target="_blank">link test</a>')}</p>\`;
  }
  if (types.includes('list')) {
    content += '<ul>';
    for (let i = prand.unsafeUniformIntDistribution(1, 2, locals.rng); i > 0; i--) {
      content += '<li>list item';
      if (prand.unsafeUniformIntDistribution(0, 10, locals.rng) < 4) {
        content += '<ul>';
        for (let j = prand.unsafeUniformIntDistribution(1, 2, locals.rng); j > 0; j--) content += '<li>list item niveau 2</li>';
        content += '</ul>';
      }
      content += '</li>';
    }
    content += '</ul>';
  }
  content += '</div>';
  return content;
};

locals.randomContent = randomContent;

const getText = (key, id, preventError) => {
  return locals.i18n.getText(key, id, preventError);
};

locals.getText = getText;

const hasText = (key, id, withFallback) => {
  return locals.i18n.hasText(key, id, withFallback);
};

locals.hasText = hasText;

const getSubdir = (key) => {
  return getText(\`subdir.\${key}\`, id);
}

locals.getSubdir = getSubdir;

locals.globals = {};
%>
<%- include(entry); %>
`,Ce=`class MessageBuilder {
  constructor (id, includeEmpty) {
    this.id = id;
    this.groupId = \`\${this.id}-messages\`;
    this.messages = [];
    this._ids = [this.groupId];
    this.appends = {
      error: -1,
      valid: -1,
      info: -1,
      warning: -1
    };
    this._group = {
      id: this.groupId,
      includeEmpty: includeEmpty !== false
    };
  }

  get isIncluded () {
    return this._group.includeEmpty || this.messages.length > 0;
  }

  get messagesGroup () {
    return {
      ...this._group,
      messages: this.messages
    };
  }

  get ids () {
    return this._ids;
  }

  get describedby () {
    return this._ids;
  }

  add (type, data, attributes) {
    this.appends[type]++;
    const append = this.appends[type] > 0 ? '-' + this.appends[type] : '';
    const typedId = type ? \`-\${type}\` : '';
    const id = \`\${this.id}-message\${typedId}\${append}\`;
    switch (typeof data) {
      case 'string':
        // this._ids.push(id);
        this.messages.push({ type: type, id: id, text: data, attributes: attributes });
        break;

      case 'object':
        if (Array.isArray(data)) {
          data.forEach(msg => this.add(type, msg));
        } else {
          // this._ids.push(data.id);
          this.messages.push(data);
        }
        break;
    }
  }

  addError (data) {
    this.add('error', data);
  }

  addValid (data) {
    this.add('valid', data);
  }

  addInfo (data) {
    this.add('info', data);
  }

  addWarning (data) {
    this.add('warning', data);
  }
}

(function (locals) {
  locals.MessageBuilder = MessageBuilder;
}(locals));
`,_e={de:{blank:"neues Fenster"},en:{blank:"new window"},es:{blank:"nueva ventana"},fr:{error:{short:"Erreur"},disabled:{default:"Désactivé"},required:{default:"Obligatoire"},site:{name:"[Nom du site]"},social:{facebook:{default:"Facebook",url:"https://facebook.com/"},twitter:{default:"Twitter",url:"https://twitter.com/"},linkedin:{default:"Linkedin",url:"https://linkedin.com/"}},or:"ou",marianne:"Marianne",blank:"nouvelle fenêtre",readme:{dependencies:{title:"Dépendances"},use:{title:"Utilisation",description:"Afin d’utiliser le composant `${id}`, il est nécessaire d’ajouter les fichiers de styles et de scripts présents dans le dossier dist dans l'ordre suivant :\\n"},doc:{title:"Documentation",item:"Consulter [la documentation](${url}) sur le module ${title}"}},subdir:{title:"Autres exemples"}}},Ae={fr:{subdir:{title:"Pages d'exemples",artwork:"Pictogramme",collapse:"Panneau dépliant",display:"Affichage",favicon:"Icône de favori",grid:"Grille",icon:"Icônes",media:"Médias",reset:"Réinitialisation",spacing:"Espacements",typography:"Typographie",utility:"Utilitaires",print:"Impression",link:"Liens natifs","link-raw":"Liens bruts","link-reset":"Liens réinitialisés"}}},qe={fr:{title:"Analytics",description:null,doc:null,subdir:{title:"Pages",action:"Activation des actions",reduce:"Réduction des actions",attribute:"Attributs",component:"Composants",agnostic:"sans framework",alert:"Alerte (alert)","alert-close":"Alerte avec bouton de fermeture","alert-dynamic":"Alerte ajoutée dynamiquement",accordion:"Accordéon (accordion)","accordion-nested":"Accordéon imbriqué",angular:"Angular (angular)",badge:"Badge (badge)",breadcrumb:"Fil d’ariane (breadcrumb)","breadcrumb-button":"Fil d’ariane avec boutons",button:"Bouton (button)","button-a-internal":"Bouton interne avec etiquette a","button-a-external":"Bouton externe avec etiquette a","button-a-download":"Bouton de téléchargement avec etiquette a",callout:"Mise en avant (callout)",card:"Carte (card)","card-button":"Carte avec boutons","card-link":"Carte avec liens","card-tag":"Carte avec tags",connect:"Bouton France Connect (connect)","connect-a":"Bouton France Connect avec etiquette a",content:"Contenu médias (content)","content-svg":"Contenu médias SVG","content-video":"Contenu médias vidéo",consent:"Gestionnaire de consentement (consent)","consent-placeholder":"Gestionnaire de consentement bloc désactivé (placeholder)",checkbox:"Case à cocher (checkbox)","checkbox-checked":"Case à cocher cochée",download:"Téléchargement de fichier (download)",footer:"Pied de page (footer)",follow:"Lettre d'information et Réseaux Sociaux (follow)","follow-form":"Lettre d'information avec formulaire et Réseaux Sociaux",header:"En-tête (header)",highlight:"Mise en exergue (highlight)",input:"Champ de saisie (input)","input-button":"Combo champ de saisie avec bouton d'envoi",link:"Lien (link)","link-external":"Lien externe","link-download":"Lien de téléchargement",modal:"Modale (modal)",navigation:"Navigation principale (navigation)",notice:"Bandeau d'information (notice)",page:"Pages",pagination:"Pagination (pagination)",quote:"Citation (quote)",radio:"Bouton radio (radio)","radio-rich":"Bouton radio riche",react:"React (react)",search:"Barre de recherche (search)",select:"Liste déroulante (select)",share:"Boutons de partage (share)",sidemenu:"Menu latéral (sidemenu)",spa:"Single-page application",stepper:"Indicateur d'étapes (stepper)",summary:"Sommaire (summary)",tab:"Onglets (tab)",tag:"Tag (tag)","tag-dismissible":"Tag supprimable","tag-pressable":"Tag pressable","tag-pressable-checked":"Tag pressable coché","tag-clickable":"Tag cliquable",table:"Tableau (table)",tile:"Tuile (tile)",toggle:"Interrupteur (toggle)","toggle-checked":"Interrupteur coché",tooltip:"Information contextuelle (tooltip)","tooltip-btn":"Infobulle",transcription:"Transcription (transcription)",translate:"Sélecteur de langue (translate)",upload:"Ajout de fichier (upload)",vue:"Vue (vue)"}}},Ie={fr:{title:"Accordéon",description:"L'accordéon permet aux utilisateurs d'afficher et de masquer des sections de contenu présentés dans une page.",doc:"https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon",subdir:{title:"Mises en situation",imbrication:"Imbrication d'accordéons"}}},Pe={fr:{subdir:{title:"Autres versions",deprecated:"version dépréciée"},label:{default:"Ajouter un fichier",multiple:"Ajouter des fichiers"},hint:{default:"Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing."},error:{default:"Format de fichier non supporté"},sample:{default:"Bouton upload 1 seul fichier",error:"Bouton upload avec erreur",multiple:"Bouton upload fichiers multiples",disabled:"Bouton upload désactivé"}}},Le={de:{default:{login:"Einloggen mit",link:"Was ist FranceConnect?"},plus:{link:"Was ist FranceConnect+?"}},en:{default:{login:"Sign in with",link:"What is FranceConnect?"},plus:{link:"What is FranceConnect+?"}},es:{default:{login:"Iniciar sesion con",link:"¿Qué es FranceConnect?"},plus:{link:"¿Qué es FranceConnect+?"}},fr:{title:"Bouton FranceConnect",description:"Le bouton FranceConnect est un bouton spécifique permettant d'interagir avec l'API FranceConnect.<br>https://franceconnect.gouv.fr/",doc:"https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-franceconnect",default:{login:"S’identifier avec",brand:"FranceConnect",link:"Qu’est-ce que FranceConnect ?",href:"https://franceconnect.gouv.fr/"},plus:{brand:"FranceConnect",link:"Qu’est-ce que FranceConnect+ ?",href:"https://franceconnect.gouv.fr/france-connect-plus"},agent:{brand:"AgentConnect"}}},$e={fr:{title:"Bouton radio",description:null,option:{"no-answer":"Sans réponse"},subdir:{title:"Autres versions",deprecated:"version dépréciée"}}},Ee={fr:{title:"Carte",description:"La carte donne des aperçus cliquables d’une page de contenu à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires. La carte n’est jamais présentée de manière isolée.",doc:"https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte",subdir:{title:"Carte de téléchargement de fichier",description:"Ce composant permet aux utilisateurs de télécharger un fichier.",download:"Carte de téléchargement",deprecated:"Version dépréciée"}}},Te={fr:{title:"Case à cocher",description:"La case à cocher permet à l’utilisateur de sélectionner une ou plusieurs options dans une liste. Elle est utilisée pour effectuer des sélections multiples (de 0 à N éléments), ou bien pour permettre un choix binaire, lorsque l’utilisateur peut sélectionner ou désélectionner une seule option.",subdir:{title:"Autres versions",deprecated:"version dépréciée"}}},Se={fr:{title:"Champ de saisie",description:"Les champ permettent à un utilisateur d'entrer du contenu et données.",doc:"https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/champ-de-saisie",sample:{text:'Champ de type "text"',number:'Champ de type "number"',search:'Champ de type "search"',date:'Champ de type "date"',textarea:'Champ de type "textarea"',password:'Champ de type "password"',button:"Combo champ + bouton d'envoi",action:"Combo champ + bouton d'action",placeholder:"Champ avec placeholder",value:"Champ avec valeur initiale",disabled:"Champ désactivé",hint:"Champ avec texte additionnel",icon:"Champ avec icône personalisée",valid:"Champ valide avec texte de succès",error:"Champ en erreur avec texte d'erreur"},"remove-field":"Supprimer le champ",subdir:{title:"Autres versions",deprecated:"version dépréciée"}}},Ge={fr:{title:"Contenu médias",description:"Les médias désignent vos contenus photos et vidéos. Lorsqu’ils sont intégré à une page de contenu, il est recommandé de suivre les règles décrites dans la documentation.",doc:"https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/contenu-medias",sample:{video:{title:"Vidéo de présentation du Service National Universel - voir transcription ci-dessous"},img:{caption:"© DILA 2020",link:"vie-publique.fr",alternative:"Planche 1 de la BD Simone Veil : la loi sur l’avortement. Épisode 2 - voir transcription ci-dessous",transcription:{title:"Simone Veil : la loi sur l’avortement",content:'<p class="fr-mb-4v">Épisode 2 : une loi qui oppose<br><br>Synopsis : Dans un café, Louise discute avec sa mère de l’opposition virulente qu’a soulevée le projet de loi sur l’avortement défendu par Simone Veil lors des trois jours de débat à l’Assemblée nationale. Trois jours pendant lesquels les langues se sont déliées, pour le meilleur comme pour le pire.</p><ul><li>Case 1</li></ul><p><em>Intérieur jour salon. Un père et ses quatre enfants sont assis, blottis les uns contre les autres, devant un poste de TV et regardent le discours de Simone Veil retransmis en direct.</em><br><em>26 novembre 1974.</em><br>SIMONE VEIL :<br>Aucune femme ne recourt de gaieté de cœur à l’avortement. Il suffit d’écouter les femmes.</p><ul><li>Case 2</li></ul><p><em>Intérieur jour salon. Plan rapproché de la petite fille (la mère de Louise) serré contre son père, son ours en peluche dans les bras.</em><br>SIMONE VEIL :<br>C’est toujours un drame cela restera toujours un drame.</p><ul><li>Case 3</li></ul><p><em>Intérieur jour café, Louise et sa mère, plan rapproché de celle-ci.</em><br>MÈRE :<br>Je ne me rappelle pas grand-chose de ce discours retransmis en direct, mais je me souviens très bien que nous étions tous les quatre avec mon père et mes frères et sœurs devant la télé.<br>Mon père a fondu en larmes juste après.</p><ul><li>Case 4</li></ul><p><em>Intérieur jour café, Louise et sa mère.</em><br>MÈRE :<br>Il faut se rappeler les réactions suite à ce discours ! Simone Veil a souvent évoqué le « climat de passions » qui régnait. Pendant les trois jours de débats qui ont suivi, tout a été dit, même le pire.</p><ul><li>Case 5</li></ul><p><em>Intérieur nuit Assemblée nationale. Plan rapproché sur Jean Foyer à la tribune.<br>Encart texte</em><br>26 novembre 1974. Les débats commencent à l’Assemblée nationale. Jean Foyer, député de la majorité de droite, est le premier opposant au projet à monter à la tribune.</p><p>JEAN FOYER :<br>Déjà des capitaux sont impatients de s’investir dans l’industrie de la mort, et le temps n’est pas loin où nous connaîtrons en France « ces avortoirs », ces abattoirs, où s’entassent des cadavres de petits hommes et que certains de mes collègues ont eu l’occasion de visiter à l’étranger.</p><ul><li>Case 6</li></ul><p><em>Intérieur nuit Assemblée. Lucien Neuwirth à la tribune.<br>Encart texte</em><br>Lucien Neuwirth, député de la majorité qui avait défendu en 1967 le projet de loi sur la contraception, s’exprime.</p><p>LUCIEN NEUWIRTH :<br>… or chacun le sait, l’avortement n’est pas autre chose que l’issue extrême, l’alternative détestable d’une grossesse non désirée.<br>Il convient donc de s’attaquer à l’effet et non à la cause.</p>'}}}}},Me={fr:{title:"Contrôle segmenté",description:`Le composant "contrôle segmenté" incite l'utilisateur à choisir entre plusieurs options d'affichage disponibles (vues), mutuellement exclusives avec une valeur sélectionnée par défaut.`,fieldset:{legend:"Légende"},sample:{default:"Contrôle segmenté simple",sm:"Contrôle segmenté taille SM",disabled:"Contrôle segmenté désactivé",icon:"Contrôle segmenté avec icônes","no-legend":"Contrôle segmenté sans légende","legend-inline":"Contrôle segmenté avec légende en ligne","hint-text":"Contrôle segmenté avec texte d'aide",max:"Contrôle segmenté cas maximum (non recommandé)"}}},De={fr:{subdir:{title:"Autres versions",deprecated:"version dépréciée"},label:{default:"Libellé"},hint:{default:"Texte de description additionnel, valeur de 0 à 100."},error:{default:"Valeur sélectionnée impossible"},valid:{default:"Message de succès"},sample:{default:"Curseur simple",sm:"Curseur simple taille SM","no-indicators":"Curseur simple sans les indicateurs min/max",step:"Curseur avec étapes","step-sm":"Curseur avec étapes taille SM",double:"Curseur double avec valeurs min et max","double-sm":"Curseur double taille SM","double-step":"Curseur double avec étapes","double-step-sm":"Curseur double avec étapes taille SM",disabled:"Curseur désactivé","step-disabled":"Curseur avec étape désactivé","double-disabled":"Curseur double désactivé","prefix-suffix":"Curseur avec préfixe et suffixe",error:"Curseur avec erreur"}}},ze={fr:{title:"Fil d'Ariane",description:"Le fil d’Ariane est un système de navigation secondaire qui permet à l’utilisateur de se situer sur le site qu’il consulte.",doc:"https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/fil-d-ariane",subdir:{title:"Mises en situation",alternative:"Alternatives"}}},Be={fr:{fieldset:{legend:{default:"Légende pour l’ensemble des éléments"}},label:{default:"Libellé",short:"libl",long:"Libellé de l'élément"},hint:{default:"Texte de description additionnel",mandatory:"Sauf mention contraire, tous les champs sont obligatoires."},message:{error:{default:"Texte d’erreur obligatoire"},valid:{default:"Texte de validation"}},subdir:{title:"Autres versions",deprecated:"version dépréciée"}}},Fe={fr:{sample:{default:"Information contextuelle",hover:"Ouverture du tooltip au survol",tooltip:"Infobulle",click:"L'ajout de la classe '<code>fr-btn--tooltip</code>' déclenche l'ouverture du tooltip au click.",grid:{left:"Information contextuelle dans une grille à gauche",right:"Information contextuelle dans une grille à droite"},text:"Information contextuelle dans un texte",list:"Information contextuelle dans une liste",table:"Infobulle dans un tableau",example:"Exemple"}}},Ne={fr:{subdir:{title:"Autres versions",deprecated:"version dépréciée"}}},Oe={fr:{title:"Case à cocher",description:"La case à cocher permet à l’utilisateur de sélectionner une ou plusieurs options dans une liste. Elle est utilisée pour effectuer des sélections multiples (de 0 à N éléments), ou bien pour permettre un choix binaire, lorsque l’utilisateur peut sélectionner ou désélectionner une seule option.",subdir:{title:"Autres versions",download:"lien de téléchargement","back-to-top":"lien de retour en haut de page"}}},Re={fr:{title:"Liste déroulante",description:null,option:{placeholder:"Sélectionner une option","no-answer":"Sans réponse"},subdir:{title:"Autres versions",deprecated:"version dépréciée"}}},Ve={fr:{title:"Mot de passe",description:"La demande de mot de passe permet d’aider un utilisateur à créer ou saisir un mot de passe.",doc:null,sample:{register:"Inscription",login:"Connexion",validate:"Validation erreur/succès",hint:"Description additionelle"},show:{default:"Afficher",long:"Afficher le mot de passe"},password:{default:"Mot de passe"},format:{label:"Votre mot de passe doit contenir :",digit:"1 chiffre minimum",special:"1 caractère spécial minimum",characters:"12 caractères minimum",valid:"validé",error:"en erreur"},link:{label:"Mot de passe oublié ?",href:"url de la page de récupération"}}},We={fr:{title:"Sélecteur de langue",description:"Le sélecteur de langue permet à l’utilisateur de choisir la langue dans laquelle est affichée le contenu du site, si celui-ci est disponible en plusieurs langues.",doc:"https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/selecteur-de-langue",button:{title:"Sélectionner une langue"},sample:{default:"Sélecteur de langue","no-outline":"Sélecteur de langue sans bordure",column:"Sélecteur de langue sur plusieurs colones"}}},Ue={fr:{title:"Tableaux",description:"Les tableaux sont utilisés pour organiser et afficher les informations d'un jeu de données.",subdir:{title:"Autres versions",deprecated:"version dépréciée"},sample:{bordered:"Tableau avec bordures verticales",captionBottom:"Tableau avec titre en bas",columnSizes:{subtitle:"En ajoutant les classes <code>fr-col--xs, fr-col--sm, fr-col--md ou fr-col--lg</code> sur les cellules d'en-tête du tableau",title:"Exemple des colonnes de tailles minimales fixées"},complex:{subtitle:"Lorsqu’un tableau de données contient des en-têtes qui ne sont pas répartis uniquement sur la première ligne et/ou la première colonne de la grille ou dont la portée n’est pas valable pour l’ensemble de la colonne ou de la ligne, on parle de tableau de données complexe. Il est alors nécessaire de fournir un « résumé » permettant d’en expliquer sa nature et sa structure afin d’en faciliter la consultation pour des utilisateurs de technologies d’assistance par exemple.",title:"Tableau complexe (comportant des cellules fusionnées)"},default:"Tableau MD (défaut)",doubleEntry:"Tableau à double entrée",lg:"Tableau LG",miscellaneous:"Tableau avec filtre et navigation comportant différents types de données",multiline:{subtitle:"Il est possible de réactiver le retour à la ligne des éléments inline en ajoutant la classe <code>fr-cell--multiline</code> sur l'element <code>table</code>, une ligne ou une cellule du tableau",title:"Exemple de cellules avec retour à la ligne automatique"},noCaption:"Tableau avec titre invisible",noScroll:"Tableau non scrollable",selectable:"Tableau avec lignes sélectionnables",fixedAtMd:"Tableau avec première colonne fixée à partir du breakpoint MD (existe en SM, MD et LG)",sm:"Tableau SM",utilityClasses:{subtitle:"Par défaut le contenu des cellules est centré verticalement et aligné à gauche mais peut être modifié à l'aide des classe utilitaires <code>fr-cell--top, fr-cell--bottom</code> pour l'alignement vertical et <code>fr-cell--center, fr-cell--right</code> pour l'alignement horizontal",title:"Exemple des classes utilitaires d'alignement"}},data:{caption:{detail:"(Résumé) Emploi du temps horaire des Groupes 1 et 2, le matin des jours de la semaine ouvrée (Lundi au Vendredi) : <ul> <li>la première colonne représente le planning de la journée de Lundi pour les groupes 1 et 2,</li> <li>la deuxième colonne représente le planning de la journée de Mardi pour les groupes 1 et 2,</li> <li>la troisième colonne représente le planning des journées de Mercredi et Jeudi pour le groupe 1,</li> <li>la quatrième colonne représente le planning des journées de Mercredi et Jeudi pour le groupe 2,</li> <li>la cinquième colonne représente le planning de la journée de Vendredi pour les groupes 1 et 2.</li> </ul>",default:"Titre du tableau (caption)",large:"Titre long du tableau (caption) Repellat natus illo omnis nulla nostrum ut doloremque ipsam voluptas officiis cumque porro."},cell:{action:{button:"Libellé bouton",empty:"Action",sort:"Trier",select:"Sélectionner",selectAll:"Sélectionner toutes les lignes",selectRow:"Sélectionner la ligne"},collapsed:"Exemple de cellule fusionnée",doubleEntry:"En tête de colonne [À MODIFIER]",download:{detail:"JPG – 61,88 Ko",label:"Lien de Téléchargement"},label:"Libellé par défaut",number:"30,00&nbsp;€",text:"Texte par défaut",title:"Titre par défaut"},navigation:{buttons:{label:"Action tableau"},detail:"215 lignes",select:{label:"Nombre de lignes par page",placeholder:"Nombre de lignes par page",options:{option1:"4 lignes par page",option2:"10 lignes par page",option3:"20 lignes par page"}}},actionBar:{buttons:{label:"Action groupée"},detail:"Nombre de lignes sélectionnées",segmented:{legend:"Type d'affichage",list:"Liste",table:"Tableau"}}}}},Je={fr:{title:"Téléchargement de fichier",description:'Ce composant est déprécié. La fonctionnalité "téléchargement de fichier" est maintenant disponible directement sur le composant carte et le composant lien.',subdir:{title:"Autres versions",deprecated:"version dépréciée"}}},He={fr:{title:"Transcription",description:null,doc:"https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/transcription",collapse:{title:"Transcription"},modal:{title:"Titre de la transcription"},button:{close:"Fermer",fullscreen:"Agrandir",fullscreenAriaLabel:"Agrandir la transcription"},link:{download:"Télécharger"},sample:{default:"Transcription avec zone d’action"}}},Xe={fr:{title:"Tuile",description:"La tuile est un raccourci ou point d’entrée qui redirige les utilisateurs vers des pages de contenu. Elle fait généralement partie d'une collection ou liste de tuiles similaires. La tuile n’est jamais présentée de manière isolée.",subdir:{title:"Autres versions",deprecated:"version dépréciée",download:"Tuile de téléchargement"}}},Qe={fr:{title:"Bloc fonctionnel d'adresse postale'",description:"La demande d’adresse postale permet d’aider un utilisateur à saisir son adresse.",doc:null,label:{address:"Adresse",complement:"Complément d’adresse",optional:"(optionnel)",locality:"Lieu-dit, commune déléguée ou boîte postale",postal:"Code postal",city:"Ville ou commune",number:"Numéro",street:"Voie",block:"Immeuble",building:"Bâtiment",stare:"Escalier",apartment:"Numéro d'appartement",cedex:"Cedex",name:"Dénomination",country:"Pays"},hint:{address:"Indication : numéro et voie",complement:"Indication : bâtiment, immeuble, escalier et numéro d’appartement",city:"Exemple : Montpellier",postal:"Format attendu : 5 chiffres"},legend:{address:"Adresse postale",complement:"Complément d'adresse postale"},sample:{national:"Demande d’une adresse postale nationale",complement:"Complément d'adresse",international:"Demande d’une adresse postale internationale"}}},Ze={fr:{title:"Civilité",description:null,option:{sex:{female:"Feminin",male:"Masculin"},family:{concubinage:"Concubinage",divorced:"Divorcé",maried:"Marié",pacsed:"Pacsé",single:"Célibataire",widow:"Veuf"},honorific:{doctor:"Docteur",inspector:"Inspecteur",principal:"Principal",professor:"Professeur",provisor:"Proviseur",rector:"Recteur"}},legend:{honorific:"Titre d’appel",family:"Situation familiale",sex:"Sexe"},sample:{honorific:"Demande du titre d’appel",family:"Demande de situation familiale",sex:"Demande du sexe"},section:{preference:"Au delà de 5 choix ou lorsque l’espace n’est pas suffisant, il est préférable d’utiliser une liste déroulante.",recommandation:"Les boutons radios sont recommandés lorsque l’utilisateur doit choisir un élément parmi 2 à 5 choix possibles."}}},Ke={fr:{title:"Bloc fonctionnel de date unique",description:null,error:{day:"Le jour est invalide",global:"La date est postérieure à aujourd’hui",month:"Le mois est invalide",year:"L’année est invalide"},hint:{birthdate:"Indication : texte de description additionnel",day:"Exemple : 14",month:"Exemple : 12",year:"Exemple : 1984"},legend:{birthdate:"Date de naissance"},option:{day:"Jour",month:"Mois",year:"Année"},sample:{default:"Défaut","single-error":"Erreur unitaire","global-error":"Erreur globale"}}},Ye={fr:{title:"Bloc fonctionnel d'adresse électronique",description:"La demande d’une adresse électronique permet d’aider un utilisateur à saisir une adresse électronique. Précisez à l’utilisateur le format de saisie attendu.",doc:null,sample:{default:"Demande d'une adresse électronique",indication:"Demande et indication de traitement d’une adresse électronique"},label:"Adresse électronique",hint:{format:"Format attendu : nom@domaine.fr",indication:"Indication : cette adresse est utilisée uniquement pour la connexion au service."},error:"Le format de l’adresse electronique saisie n’est pas valide. Le format attendu est : nom@domaine.fr"}},en={fr:{id:"name",title:"Bloc fonctionnel de nationalité",description:"La demande de nationalité permet d’aider un utilisateur à saisir sa nationalité.",doc:null,label:{nationality:"Nationalité"},legend:{nationality:"Nationalité"},sample:{default:"Demande de nationalité"}}},nn={fr:{id:"name",title:"Bloc fonctionnel de nom et prénom",description:"La demande de nom et prénom permet d’aider un utilisateur à saisir son nom et son prénom.",doc:null,hint:{married:"Indication : ancien nom…",birth:"Indication : nom de famille non rectifié après décision du tribunal."},label:{"add-firstname":"Ajouter un prénom","remove-firstname":"Supprimer le prénom",country:"Pays",family:"Nom",given:"Prénom",usual:"Nom d'usage",birth:"Nom de naissance","no-firstname":"Je n'ai pas de prénom"},option:{placeholder:"Sélectionner une option"},country:{japan:"Japon",france:"France",england:"Angleterre"},sample:{default:"Défaut",button:"bouton","firstname-disabled":"prénom désactivé",married:"nom d'usage",with:"Avec"},section:{default:"Demande d’un nom et d’un prénom en France",international:"Demande d’un nom et d’un prénom à l’international"}}},tn={fr:{title:"Bloc fonctionnel de société",description:"La demande de renseignement sur la société permet d’aider un utilisateur à saisir les renseignements concernant sa société.",doc:null,label:{siret:"Numéro de SIRET",type:"Type de société",position:"Fonction dans la société"},structure:{EI:"Entrepreneur individuel (EI)",EURL:"Entreprise unipersonnelle à responsabilité limitée (EURL)",SARL:"Société à responsabilité limitée (SARL)",SASU:"Société par actions simplifiée unipersonnelle (SASU)",SAS:"Société par actions simplifiée (SAS)",SA:"Société anonyme (SA)",SNC:"Société en nom collectif (SNC)",SCS:"Société en commandite simple (SCS)",SCA:"Société en commandite par actions (SCA)"},fieldset:{siret:"SIRET de l'entreprise",address:"Adresse du siège social",structure:"Type de société",name:"Nom du représentant moral",representative:"Représentant moral de l'entreprise"},directory:{label:"Annuaire des entreprises",href:"https://annuaire-entreprises.data.gouv.fr/"},sample:{siret:"Demande d'un numéro de SIRET",address:"Demande d’une adresse de siège social",structure:"Demande d’un type de société",representative:"Demande d’un représentant moral"}}},an={fr:{title:"Bloc fonctionnel de numéro de téléphone",description:"La demande de numéro de téléphone permet d’aider un utilisateur à saisir son numéro de téléphone. Précisez à l’utilisateur le format de saisie attendu.",doc:null,sample:{default:"Demande d'un numéro de téléphone"},label:"Numéro de téléphone",hint:{format:"Format attendu : (+33) 1 22 33 44 55"},error:"Le format de numéro de téléphone saisie n’est pas valide. Le format attendu est : (+33) 1 22 33 44 55"}},sn={fr:{title:"Page de connexion",description:"Modèles de pages de connexion",doc:null,heading:"Connexion à [Nom de service-site]",connect:{title:"Se connecter avec FranceConnect"},login:{legend:"Se connecter avec son compte",desc:"Description — Lorem ipsum dolor sit amet, consectetur adipiscing elit.",credentials:"identifiants",password:"Mot de passe",username:{default:"Identifiant",hint:"Format attendu : nom@domaine.fr"},remember:"Se souvenir de moi",error:"Identifiant/mot de passe incorrect",button:"Se connecter"},create:{title:"Vous n’avez pas de compte ?",button:"Créer un compte"},recover:{heading:{title:"Récupération de mot de passe sur [Nom du service-site]",desc:"Chapô — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et."},legend:"Récupérer le mot de passe de votre compte",desc:"Description — Veuillez saisir l’adresse électronique associée à votre compte. Nous vous enverrons plus d’informations sur pour réinitialiser votre mot de passe",username:{default:"Identifiant",hint:"Format attendu : nom@domaine.fr"},button:"Valider",confirmation:{alert:{default:"Votre demande de récupération de mot de passe a été transmise. Vous recevrez un courriel dans quelques instants.",hint:"Détail — Si vous n’avez pas reçu de courriel (n’hésitez pas à vérifier dans les indérisables), vous pouvez re saisir votre adresse électronique."}}},subdir:{title:"Pages de connexion","1-default":"Page de connexion","2-error":"Page de connexion avec erreur","3-recover":"Pages de Récupération - Mot de passe oublié","3a-form":"Récupération de mot de passe","3b-confirmation":"Confirmation de récupération de mot de passe"}}},rn={fr:{title:"Création de compte",description:"Modèles de pages de création de compte",doc:null,heading:{title:"Création de compte sur [Nom de service-site]",desc:"Chapô — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et."},steps:{login:"Choisir un identifiant",identity:"Renseigner une identité",address:"Saisir des coordonnées"},connect:{title:"Se créer un compte avec FranceConnect",desc:"FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion aux services en ligne."},login:{legend:"Se créer un compte en choisissant un identifiant",desc:"Description — Lorem ipsum dolor sit amet, consectetur adipiscing elit.",username:{default:"Identifiant",hint:"Format attendu : nom@domaine.fr"},password:"Mot de passe",optin:"Mention CNIL — Lorem ipsum dolor sit amet, consectetur adipicing est",button:"Valider"},identity:{legend:"Identité personnelle"},address:{legend:"Coordonnées personnelles"},confirmation:{create:{alert:{default:"Votre compte a bien été créé. Vous recevrez un courriel dans quelques instants contenant un lien de confirmation.",hint:"Détail — Si vous n’avez pas reçu de courriel (n’hésitez pas à vérifier dans les indérisables), vous pouvez re saisir votre adresse électronique."}},activate:{alert:{default:"Votre compte a bien été activé. Vous pouvez dès maintenant commencer à l’utiliser.",hint:"Détail — Si vous n’avez pas reçu de courriel (n’hésitez pas à vérifier dans les indérisables), vous pouvez re saisir votre adresse électronique."}}},button:{valid:"Valider",previous:"Précédent"},subdir:{title:"Pages de création de compte","1-single":"Page de création de compte","2-steps":"Page de création de compte en plusieurs étapes","2a-login":"Étape 1 - Formulaires de création de compte - identifiant","2b-identity":"Étape 2 - Formulaires de création de compte - identité","2c-address":"Étape 3 - Formulaires de création de compte - coordonnées","3-confirmation":"Page de confirmation","3a-create":"Confirmation de création de compte","3b-activate":"Confirmation d'activation de compte"}}},ln={fr:{title:"Codes de Statut HTML",description:"Modèles de pages correspondant aux réponses de statut HTML",button:{home:"Page d'accueil",contact:"Contactez-nous"},contact:{link:"lien vers un formulaire de contact"}}},on={fr:{title:"Page d'erreur",description:null,button:{contact:"Contactez-nous"},page:{description:"Essayez de rafraîchir la page ou bien ressayez plus tard.",lead:"Désolé, le service rencontre un problème, nous travaillons pour le résoudre le plus rapidement possible.",subtitle:"Erreur 500",title:"Erreur inattendue"},subdir:{title:"Page Erreur 500",default:"Page Erreur 500, simple",contact:"Page Erreur 500, avec contact"}}},dn={fr:{title:"Erreur serveur",description:null,doc:null,page:{title:"Service indisponible",infos:"Le service ${site-name} rencontre un problème, nous travaillons pour le résoudre le plus rapidement possible.",retry:"Merci de réessayer plus tard ou de vous rendre sur nos réseaux sociaux, vous serez bientôt en mesure de réutiliser le service."},info:{title:"à noter",description:"Ce modèle de page est disponible uniquement en version standalone.<br>Pour la tester, veuillez éxécuter la commande <br><i>yarn standalone -p unavailable</i>"}}},cn={fr:{title:"Utilitaires de couleur",description:null,doc:null,subdir:{title:"Mises en situation",background:"Classes utilitaires de couleur de fond",text:"Classes utilitaires de couleur de texte",border:"Classes utilitaires de couleur de bordures"}}},un={global:_e,core:Ae,analytics:qe,accordion:Ie,upload:Pe,connect:Le,radio:$e,card:Ee,checkbox:Te,input:Se,content:Ge,segmented:Me,range:De,breadcrumb:ze,form:Be,tooltip:Fe,toggle:Ne,link:Oe,select:Re,password:Ve,translate:We,table:Ue,download:Je,transcription:He,tile:Xe,address:Qe,civility:Ze,date:Ke,email:Ye,nationality:en,name:nn,company:tn,tel:an,login:sn,register:rn,response:ln,unexpected:on,"not-found":{fr:{title:"Page d'erreur",description:null,button:{home:"Page d'accueil",contact:"Contactez-nous"},page:{title:"Page non trouvée",subtitle:"Erreur 404",lead:"La page que vous cherchez est introuvable. Excusez-nous pour la gène occasionnée.",description:{default:"Si vous avez tapé l'adresse web dans le navigateur, vérifiez qu'elle  est correcte. La page n’est peut-être plus disponible.<br>Dans ce cas, pour continuer votre visite vous pouvez consulter notre page d’accueil.",search:"Si vous avez tapé l'adresse web dans le navigateur, vérifiez qu'elle  est correcte. La page n’est peut-être plus disponible.<br>Dans ce cas, pour continuer votre visite vous pouvez consulter notre page d’accueil, ou effectuer une recherche avec notre moteur de recherche en haut de page.",contact:"Si vous avez tapé l'adresse web dans le navigateur, vérifiez qu'elle  est correcte. La page n’est peut-être plus disponible.<br>Dans ce cas, pour continuer votre visite vous pouvez consulter notre page d’accueil.<br>Sinon contactez-nous pour que l’on puisse vous rediriger vers la bonne information.",full:"Si vous avez tapé l'adresse web dans le navigateur, vérifiez qu'elle  est correcte. La page n’est peut-être plus disponible.<br>Dans ce cas, pour continuer votre visite vous pouvez consulter notre page d’accueil, ou effectuer une recherche avec notre moteur de recherche en haut de page.<br>Sinon contactez-nous pour que l’on puisse vous rediriger vers la bonne information."}},subdir:{title:"Page Erreur 404",complete:"Page Erreur 404, complète",default:"Page Erreur 404, simple",contact:"Page Erreur 404, avec contact",search:"Page Erreur 404, avec recherche"}}},unavailable:dn,colors:cn};var K={exports:{}};(function(a,n){(function(h,_){a.exports=_()})(xe,function(){var h={},_={};function j(i,c){for(var u=0,l=i.length-1;l>=0;l--){var x=i[l];x==="."?i.splice(l,1):x===".."?(i.splice(l,1),u++):u&&(i.splice(l,1),u--)}if(c)for(;u--;u)i.unshift("..");return i}var A=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,E=function(i){return A.exec(i).slice(1)};function T(){for(var i="",c=!1,u=arguments.length-1;u>=-1&&!c;u--){var l=u>=0?arguments[u]:"/";if(typeof l!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!l)continue;i=l+"/"+i,c=l.charAt(0)==="/"}return i=j(z(i.split("/"),function(x){return!!x}),!c).join("/"),(c?"/":"")+i||"."}function O(i){var c=R(i),u=le(i,-1)==="/";return i=j(z(i.split("/"),function(l){return!!l}),!c).join("/"),!i&&!c&&(i="."),i&&u&&(i+="/"),(c?"/":"")+i}function R(i){return i.charAt(0)==="/"}function Y(){var i=Array.prototype.slice.call(arguments,0);return O(z(i,function(c,u){if(typeof c!="string")throw new TypeError("Arguments to path.join must be strings");return c}).join("/"))}function ee(i,c){i=T(i).substr(1),c=T(c).substr(1);function u(m){for(var g=0;g<m.length&&m[g]==="";g++);for(var w=m.length-1;w>=0&&m[w]==="";w--);return g>w?[]:m.slice(g,w-g+1)}for(var l=u(i.split("/")),x=u(c.split("/")),$=Math.min(l.length,x.length),P=$,y=0;y<$;y++)if(l[y]!==x[y]){P=y;break}for(var p=[],y=P;y<l.length;y++)p.push("..");return p=p.concat(x.slice(P)),p.join("/")}var ne="/",te=":";function ae(i){var c=E(i),u=c[0],l=c[1];return!u&&!l?".":(l&&(l=l.substr(0,l.length-1)),u+l)}function ie(i,c){var u=E(i)[2];return c&&u.substr(-1*c.length)===c&&(u=u.substr(0,u.length-c.length)),u}function se(i){return E(i)[3]}var re={extname:se,basename:ie,dirname:ae,sep:ne,delimiter:te,relative:ee,join:Y,isAbsolute:R,normalize:O,resolve:T};function z(i,c){if(i.filter)return i.filter(c);for(var u=[],l=0;l<i.length;l++)c(i[l],l,i)&&u.push(i[l]);return u}var le="ab".substr(-1)==="b"?function(i,c,u){return i.substr(c,u)}:function(i,c,u){return c<0&&(c=i.length+c),i.substr(c,u)},V={};(function(i){var c=/[|\\{}()[\]^$+*?.]/g,u=Object.prototype.hasOwnProperty,l=function(p,m){return u.apply(p,[m])};i.escapeRegExpChars=function(p){return p?String(p).replace(c,"\\$&"):""};var x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},$=/[&<>'"]/g;function P(p){return x[p]||p}var y=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;i.escapeXML=function(p){return p==null?"":String(p).replace($,P)},i.escapeXML.toString=function(){return Function.prototype.toString.call(this)+`;
`+y},i.shallowCopy=function(p,m){if(m=m||{},p!=null)for(var g in m)l(m,g)&&(g==="__proto__"||g==="constructor"||(p[g]=m[g]));return p},i.shallowCopyFromList=function(p,m,g){if(g=g||[],m=m||{},p!=null)for(var w=0;w<g.length;w++){var q=g[w];if(typeof m[q]<"u"){if(!l(m,q)||q==="__proto__"||q==="constructor")continue;p[q]=m[q]}}return p},i.cache={_data:{},set:function(p,m){this._data[p]=m},get:function(p){return this._data[p]},remove:function(p){delete this._data[p]},reset:function(){this._data={}}},i.hyphenToCamel=function(p){return p.replace(/-[a-z]/g,function(m){return m[1].toUpperCase()})},i.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}()})(V);var oe="3.1.8",de={version:oe};(function(i){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var c=_,u=re,l=V,x=!1,$=de.version,P="<",y=">",p="%",m="locals",g="ejs",w="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",q=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],ue=q.concat("cache"),W=/^\uFEFF/,B=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;i.cache=l.cache,i.fileLoader=c.readFileSync,i.localsName=m,i.promiseImpl=new Function("return this;")().Promise,i.resolveInclude=function(t,s,e){var r=u.dirname,o=u.extname,b=u.resolve,v=b(e?s:r(s),t),I=o(t);return I||(v+=".ejs"),v};function U(t,s){var e;if(s.some(function(r){return e=i.resolveInclude(t,r,!0),c.existsSync(e)}))return e}function pe(t,s){var e,r,o=s.views,b=/^[A-Za-z]+:\\|^\//.exec(t);if(b&&b.length)t=t.replace(/^\/*/,""),Array.isArray(s.root)?e=U(t,s.root):e=i.resolveInclude(t,s.root||"/",!0);else if(s.filename&&(r=i.resolveInclude(t,s.filename),c.existsSync(r)&&(e=r)),!e&&Array.isArray(o)&&(e=U(t,o)),!e&&typeof s.includer!="function")throw new Error('Could not find the include file "'+s.escapeFunction(t)+'"');return e}function S(t,s){var e,r=t.filename,o=arguments.length>1;if(t.cache){if(!r)throw new Error("cache option requires a filename");if(e=i.cache.get(r),e)return e;o||(s=J(r).toString().replace(W,""))}else if(!o){if(!r)throw new Error("Internal EJS error: no file name or template provided");s=J(r).toString().replace(W,"")}return e=i.compile(s,t),t.cache&&i.cache.set(r,e),e}function me(t,s,e){var r;if(e){try{r=S(t)(s)}catch(o){return e(o)}e(null,r)}else{if(typeof i.promiseImpl=="function")return new i.promiseImpl(function(o,b){try{r=S(t)(s),o(r)}catch(v){b(v)}});throw new Error("Please provide a callback function")}}function J(t){return i.fileLoader(t)}function be(t,s){var e=l.shallowCopy(l.createNullProtoObjWherePossible(),s);if(e.filename=pe(t,e),typeof s.includer=="function"){var r=s.includer(t,e.filename);if(r&&(r.filename&&(e.filename=r.filename),r.template))return S(e,r.template)}return S(e)}function H(t,s,e,r,o){var b=s.split(`
`),v=Math.max(r-3,0),I=Math.min(b.length,r+3),C=o(e),L=b.slice(v,I).map(function(G,D){var M=D+v+1;return(M==r?" >> ":"    ")+M+"| "+G}).join(`
`);throw t.path=C,t.message=(C||"ejs")+":"+r+`
`+L+`

`+t.message,t}function X(t){return t.replace(/;(\s*$)/,"$1")}i.compile=function(s,e){var r;return e&&e.scope&&(x||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),x=!0),e.context||(e.context=e.scope),delete e.scope),r=new f(s,e),r.compile()},i.render=function(t,s,e){var r=s||l.createNullProtoObjWherePossible(),o=e||l.createNullProtoObjWherePossible();return arguments.length==2&&l.shallowCopyFromList(o,r,q),S(o,t)(r)},i.renderFile=function(){var t=Array.prototype.slice.call(arguments),s=t.shift(),e,r={filename:s},o,b;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(o=t.shift(),t.length?l.shallowCopy(r,t.pop()):(o.settings&&(o.settings.views&&(r.views=o.settings.views),o.settings["view cache"]&&(r.cache=!0),b=o.settings["view options"],b&&l.shallowCopy(r,b)),l.shallowCopyFromList(r,o,ue)),r.filename=s):o=l.createNullProtoObjWherePossible(),me(r,o,e)},i.Template=f,i.clearCache=function(){i.cache.reset()};function f(t,s){s=s||l.createNullProtoObjWherePossible();var e=l.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=s.client||!1,e.escapeFunction=s.escape||s.escapeFunction||l.escapeXML,e.compileDebug=s.compileDebug!==!1,e.debug=!!s.debug,e.filename=s.filename,e.openDelimiter=s.openDelimiter||i.openDelimiter||P,e.closeDelimiter=s.closeDelimiter||i.closeDelimiter||y,e.delimiter=s.delimiter||i.delimiter||p,e.strict=s.strict||!1,e.context=s.context,e.cache=s.cache||!1,e.rmWhitespace=s.rmWhitespace,e.root=s.root,e.includer=s.includer,e.outputFunctionName=s.outputFunctionName,e.localsName=s.localsName||i.localsName||m,e.views=s.views,e.async=s.async,e.destructuredLocals=s.destructuredLocals,e.legacyInclude=typeof s.legacyInclude<"u"?!!s.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof s._with<"u"?s._with:!0,this.opts=e,this.regex=this.createRegex()}f.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},f.prototype={createRegex:function(){var t=w,s=l.escapeRegExpChars(this.opts.delimiter),e=l.escapeRegExpChars(this.opts.openDelimiter),r=l.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,s).replace(/</g,e).replace(/>/g,r),new RegExp(t)},compile:function(){var t,s,e=this.opts,r="",o="",b=e.escapeFunction,v,I=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),r+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!B.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");r+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!B.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var C="  var __locals = ("+e.localsName+` || {}),
`,L=0;L<e.destructuredLocals.length;L++){var G=e.destructuredLocals[L];if(!B.test(G))throw new Error("destructuredLocals["+L+"] is not a valid JS identifier.");L>0&&(C+=`,
  `),C+=G+" = __locals."+G}r+=C+`;
`}e._with!==!1&&(r+="  with ("+e.localsName+` || {}) {
`,o+=`  }
`),o+=`  return __output;
`,this.source=r+this.source+o}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+I+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+b.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+H.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+I+`
`);try{if(e.async)try{v=new Function("return (async function(){}).constructor;")()}catch(k){throw k instanceof SyntaxError?new Error("This environment does not support async/await"):k}else v=Function;s=new v(e.localsName+", escapeFn, include, rethrow",t)}catch(k){throw k instanceof SyntaxError&&(e.filename&&(k.message+=" in "+e.filename),k.message+=` while compiling ejs

`,k.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,k.message+="https://github.com/RyanZim/EJS-Lint",e.async||(k.message+=`
`,k.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),k}var D=e.client?s:function(Q){var fe=function(he,Z){var F=l.shallowCopy(l.createNullProtoObjWherePossible(),Q);return Z&&(F=l.shallowCopy(F,Z)),be(he,e)(F)};return s.apply(e.context,[Q||l.createNullProtoObjWherePossible(),b,fe,H])};if(e.filename&&typeof Object.defineProperty=="function"){var M=e.filename,ge=u.basename(M,u.extname(M));try{Object.defineProperty(D,"name",{value:ge,writable:!1,enumerable:!1,configurable:!0})}catch{}}return D},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var s=this,e=this.parseTemplateText(),r=this.opts.delimiter,o=this.opts.openDelimiter,b=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(v,I){var C;if(v.indexOf(o+r)===0&&v.indexOf(o+r+r)!==0&&(C=e[I+2],!(C==r+b||C=="-"+r+b||C=="_"+r+b)))throw new Error('Could not find matching close tag for "'+v+'".');s.scanLine(v)})},parseTemplateText:function(){for(var t=this.templateText,s=this.regex,e=s.exec(t),r=[],o;e;)o=e.index,o!==0&&(r.push(t.substring(0,o)),t=t.slice(o)),r.push(e[0]),t=t.slice(e[0].length),e=s.exec(t);return t&&r.push(t),r},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var s=this,e=this.opts.delimiter,r=this.opts.openDelimiter,o=this.opts.closeDelimiter,b=0;switch(b=t.split(`
`).length-1,t){case r+e:case r+e+"_":this.mode=f.modes.EVAL;break;case r+e+"=":this.mode=f.modes.ESCAPED;break;case r+e+"-":this.mode=f.modes.RAW;break;case r+e+"#":this.mode=f.modes.COMMENT;break;case r+e+e:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(r+e+e,r+e)+`")
`;break;case e+e+o:this.mode=f.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+o,e+o)+`")
`;break;case e+o:case"-"+e+o:case"_"+e+o:this.mode==f.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case f.modes.EVAL:case f.modes.ESCAPED:case f.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case f.modes.EVAL:this.source+="    ; "+t+`
`;break;case f.modes.ESCAPED:this.source+="    ; __append(escapeFn("+X(t)+`))
`;break;case f.modes.RAW:this.source+="    ; __append("+X(t)+`)
`;break;case f.modes.COMMENT:break;case f.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}s.opts.compileDebug&&b&&(this.currentLine+=b,this.source+="    ; __line = "+this.currentLine+`
`)}},i.escapeXML=l.escapeXML,i.__express=i.renderFile,i.VERSION=$,i.name=g,typeof window<"u"&&(window.ejs=i)})(h);var ce=h;return ce})})(K);var pn=K.exports;const mn=ve(pn);let bn=0;const gn=a=>`${a}-${bn++}`,fn=`
locals.prefix = '${N.config.prefix}';
locals.namespace = '${N.config.namespace}';
locals.organisation = '${N.config.organisation}';
locals.relativeRoot = '/';

${ye}

${we.replace("<% eval(include(root + 'src/dsfr/core/index.ejs')); %>","").replace("<%- include(entry); %>","").replace("<%","").replace("%>","")}

locals.getText = getI18nText;

locals.pictogramJson = '${je}';

${Ce}
`;class hn{constructor(n,h){this._names=n,this._template=h.replace(/eval\(include\('(..\/)*(core\/)?index.ejs'\)\);/,fn)}get names(){return this._names}retrieve(n){return this._names.some(h=>n.match(new RegExp(`^(.*/)?${h}(.ejs)?$`))!==null)}render(n){return mn.render(this._template,n)}}class vn{constructor(){this._templates=[]}add(n,h){if(n.some(j=>this._templates.find(A=>A.names.includes(j))))throw new Error(`One of the template names [${n}] already exists`);const _=new hn(n,h);this._templates.push(_)}render(n,h){const _=this._templates.find(j=>j.retrieve(n));return _?(h.include=(j,A)=>this.render(j,A),h.uniqueId=gn,h.getI18nText=(j,A="global")=>this.getI18nText(j,A),h.locale="fr",_.render(h).trim()):""}getI18nText(n,h="global"){const _=un[h].fr,A=n.split(".").reduce((E,T)=>E[T],_);return A||n}}const xn=`<%#
# paramètres action

* action.markup (string, optional) : balise HTML de l'action
valeurs :
  ** button (default) : bouton
  ** input : champ de saisie de type [button, reset, ou submit]
  ** a : lien

* action.id (string, optional) : id de l'élément d'action

* action.label (string, required) : libellé de l'élément d'action

* action.href (string, optional) : adresse url du lien si action.markup = a

* action.type (string, optional) : attribut type de l'élément d'action si action.markup = input ou button [button/submit/reset]

* action.blank (bool, optional) : si true, target prend la valeur _blank, si action.markup = a

* action.self (bool, optional) : si true, target prend la valeur _self, si action.markup = a

* action.disabled (boolean, optional) : si valeur true, action désactivée

* action.classes (array, optional) : classes de l'élément d'action

* action.attributes (object, optional) : attributs de l'élément d'action

#%>

<% eval(include('../../../index.ejs')); %>

<%
const action = locals.action || {};
const actionClasses = action.classes || [];
let actionAttrs = action.attributes || {};
const actionMarkup = action.markup || 'button';
const actionLabel = action.label;
const actionDisabled = action.disabled === true;

if (action.type) actionAttrs.type = action.type;
if (action.id) actionAttrs.id = action.id;

switch (actionMarkup) {
  case 'input':
    actionAttrs.value = actionLabel;
    break;

  case 'a':
    actionAttrs.href = action.href || '[url - à modifier]';
    switch (true) {
      case action.blank:
        actionAttrs.target = '_blank';
        actionAttrs.rel = 'noopener external';
        break;

      case action.self:
        actionAttrs.target = '_self';
        break;
    }
    break;
}

if (actionDisabled === true) {
  switch (actionMarkup) {
    case 'input':
    case 'button':
      actionAttrs['disabled'] = '';
      break;

    case 'a':
      actionAttrs['aria-disabled'] = 'true';
      actionAttrs.role = 'link';
      actionAttrs.href = undefined;
      break;
  }
}
%>

<<%= actionMarkup %> <%- includeAttrs(actionAttrs); %> <%- includeClasses(actionClasses); %>><% if (actionMarkup !== 'input') { %><%- actionLabel %></<%= actionMarkup %>><% } %>
`,kn=`<%#
# paramètres média responsive image

* media.src (string, required): url de l'image

* media.alt (string, optional): texte alternatif de l'image (peut être vide si l'image est illlustrative)

* media.ratio (string, optional): ratio forcé de l'image

* media.classes (array, optional) : classes supplémentaires sur l'image

* media.attributes (object, optional) : Attributs supplémentaires sur l'image

* media.style (object, optional) : raccourci vers l'attribut style

%>
<% eval(include('../../../index.ejs')); %>

<%
 let media = locals.media || {};
 const mediaClasses = media.classes || [];
 mediaClasses.push(\`\${prefix}-responsive-img\`);

 switch (media.ratio) {
     case '32x9':
     case '16x9':
     case '3x2':
     case '4x3':
     case '1x1':
     case '3x4':
     case '2x3':
         mediaClasses.push(\`\${prefix}-ratio-\${media.ratio}\`);
         break;
 }
 %>

<%- include('img.ejs', {media: {...media, classes: mediaClasses}}); %>
`,yn=`<%#
# paramètres média video

* media.title : titre de l'iframe

* media.src : url de la vidéo

* media.ratio (string, optional) : modificateur de ratio
  valeurs :
  - 4x3 : ratio d'aspect 4x3
  - 1x1 : ratio d'aspect carré

* media.attributes : attributs spécifiques de l'iframe

%>
<% eval(include('../../../index.ejs')); %>

<%
 let media = locals.media || {};
 let vidClasses = [prefix + '-responsive-vid'];

 switch(media.ratio) {
     case '4x3':
     case '1x1':
         vidClasses.push(\`\${prefix}-ratio-\${media.ratio}\`);
         break;
 }
 %>

<iframe title="<%= media.title %>" <%- includeClasses(vidClasses); %> src="<%= media.src %>" <%- includeAttrs(media.attributes) %>></iframe>
`,jn=`<%#
# paramètres paragraph

* paragraph.classes (array, optional): Classes suplémentaires sur le paragraphe

* paragraph.content (string, optional): contenu du paragraphe

* paragraph.size (string, optional) : taille de la police dans le paragraphe

* paragraph.weight (string, optional) : Graisse de la police dans le paragraphe

* paragraph.alt (boolean, optional) [default: false]: Si true, utilise la police alternative (spectral)

%>
<% eval(include('../../../index.ejs')); %>

<%
 let paragraph = locals.paragraph || {};
 let paragraphClasses = paragraph.classes || [];
 switch(paragraph.size) {
    case 'xs' :
    case 'sm' :
    case 'md' :
    case 'lg' :
    case 'lead' :
      paragraphClasses.push(\`\${prefix}-text--\${paragraph.size}\`);
      break;
 }

 switch(paragraph.weight) {
    case 'light' :
    case 'regular' :
    case 'bold' :
    case 'heavy' :
      paragraphClasses.push(\`\${prefix}-text--\${paragraph.weight}\`);
      break;
 }

 if (paragraph.alt === true) paragraphClasses.push(\`\${prefix}-text--alt\`);

 %>

<p <%- includeClasses(paragraphClasses); %>><%- paragraph.content || '' %></p>
`,wn=`<%#
# paramètres média image

* media.src (string, required): url de l'image

* media.alt (string, optional): texte alternatif de l'image (peut être vide si l'image est illlustrative)

* media.classes (array, optional) : classes sur l'image

* media.attributes (object, optional) : Attributs supplémentaires sur l'image

* media.style (object, optional) : raccourci vers l'attribut style

%>
<% eval(include('../../../index.ejs')); %>

<%
 let media = locals.media || {};
 const mediaClasses = media.classes || [];
 const mediaAttributes = media.attributes || {};
 let comment, alt;
 if (media.style) mediaAttributes.style = media.style;
 %>

<% switch (media.alt) {
  case 'rendered':
    comment = "L’alternative de l’image (attribut alt) doit impérativement être renseignée et reprendre le texte visible dans l’image";
    alt = contentPlaceholder("texte alternatif de l’image");
    break;

  case 'unrendered':
    comment = "L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance";
    alt = "";
    break;

  case 'unknown':
    comment = "L’alternative de l’image (attribut alt) doit toujours être présente, sa valeur peut-être vide (image n’apportant pas de sens supplémentaire au contexte) ou non (porteuse de texte ou apportant du sens) selon votre contexte";
    alt = contentPlaceholder("vide ou texte alternatif de l’image");
    break;

  default:
    comment = "L’alternative de l’image (attribut alt) doit toujours être présente, sa valeur peut-être vide (image n’apportant pas de sens supplémentaire au contexte) ou non (porteuse de texte ou apportant du sens) selon votre contexte";
    alt = media.alt;
    break;
  }
%>
<% comment = media.comment || comment; %>

<img <%- includeClasses(mediaClasses) %> <%- includeAttrs(mediaAttributes) %> src="<%= media.src %>" alt="<%= alt %>"  />
<!-- <%= comment %> -->
`,Cn=`<%#
# paramètres pictogram

* pictogram.name (string, required): nom du pictogramme

* pictogram.accent (string, optional): couleur d'accentuation (ex: green-emeraude)

* pictogram.category (string, optional): catégorie du pictogramme

* pictogram.classes (array, optional): classes supplémentaires sur l'element

%>
<% eval(include('../../../index.ejs')); %>
<%
  const pictogram = locals.pictogram || {} ;

  const pictogramJson = locals.pictogramJson || include('../../../../../../.config/pictogram.json');
  const pictograms = JSON.parse(pictogramJson);
  const category = pictograms.filter(p => p.name === pictogram.name)[0].category;

  let classes = pictogram.classes || [];
  classes.push(prefix + '-artwork');
  if (pictogram.accent) classes.push(prefix + '-artwork--' + pictogram.accent);
%>

<svg aria-hidden="true" <%- includeClasses(classes) %> viewBox="0 0 80 80" width="80px" height="80px" >
  <use class="<%= prefix %>-artwork-decorative" href="<%= relativeRoot %>dist/artwork/pictograms/<%= category %>/<%= pictogram.name %>.svg#artwork-decorative"></use>
  <use class="<%= prefix %>-artwork-minor" href="<%= relativeRoot %>dist/artwork/pictograms/<%= category %>/<%= pictogram.name %>.svg#artwork-minor"></use>
  <use class="<%= prefix %>-artwork-major" href="<%= relativeRoot %>dist/artwork/pictograms/<%= category %>/<%= pictogram.name %>.svg#artwork-major"></use>
</svg>
`,_n=[{names:["action"],partial:xn},{names:["paragraph"],partial:jn},{names:["responsive-img"],partial:kn},{names:["responsive-vid"],partial:yn},{names:["img"],partial:wn},{names:["pictogram"],partial:Cn}],An=`<%#
# paramètres accordion

* accordion.id (string, required) : Identifiant de l'accordeon (lie le bouton au collapse).

* accordion.label (string, required) : Libellé du bouton

* accordion.content (String, optional) : contenu du collapse

* accordion.isExpanded (boolean, optional) [default: false] : l'accordéon est-il ouvert au départ.

%>

<% eval(include('../../../../core/index.ejs')); %>

<%
  let accordion = locals.accordion || {}
  const isExpanded = accordion.isExpanded === true;
  const collpaseClasses = [\`\${prefix}-collapse\`];
  if (isExpanded) collpaseClasses.push(\`\${prefix}-collapse--expanded\`);
  const collapseAttributes = { ...accordion.collapseAttributes ?? {}, id: accordion.id };
 %>

<section class="<%= prefix %>-accordion">
  <h3 class="<%= prefix %>-accordion__title">
    <button type="button" class="<%= prefix %>-accordion__btn" aria-expanded="<%= isExpanded %>" aria-controls="<%= accordion.id %>" ><%- accordion.label %></button>
  </h3>
  <div <%- includeClasses(collpaseClasses) %> <%- includeAttrs(collapseAttributes); %>>
    <% if (accordion.content !== undefined) { %>
      <%- accordion.content %>
    <% } %>
  </div>
</section>
`,qn=`<%#
# paramètres accordionGroup

* accordionGroup.accordions (array, required) : tableau d'accordion

* accordionGroup.group (boolean, optional) : permet de dégrouper les accordions

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let accordionsGroup = locals.accordionsGroup || {accordions: []}
let attributes = accordionsGroup.attributes || {};
if (accordionsGroup.group !== undefined)  attributes[\`data-\${prefix}-group\`] = accordionsGroup.group;
%>

<div <%- includeAttrs(attributes); %> class="<%= prefix %>-accordions-group">
<%
  for (let i = 0; i < accordionsGroup.accordions.length; i++) {
%>
  <%- include('./accordion', {accordion: accordionsGroup.accordions[i]}); %>
<% } %>
</div>
`,In=[{names:["accordion"],partial:An},{names:["accordions-group"],partial:qn}],Pn=`<%#
# paramètres alert

* alert.id (String, required): id

* alert.title (String, optional): Titre de l'alerte

* alert.text (string, optional) : Texte de decription de l'alerte

* alert.type (String, required): type d'alerte [info/success/error/warning]

* alert.size (String, optional): taille de l'alerte [sm/md/lg]

* alert.classes (array, optional): Classes supplémentaires sur l'alerte

* alert.attribute (object, optional): Attributs supplémentaires sur l'alerte

* alert.dismissible (boolean, optional): Ajoute un bouton de fermeture

* alert.expanded (boolean, optional) [default: true] : valeur de l'attribut aria-expanded du bouton de fermeture de l'alerte

* alert.button (object, optional): Paramètre du bouton de fermeture (si dismissible: true)

* alert.alert (boolean, optional): Si true, ajoute un role alert (si insertion à la volée de l'alerte)

* alert.markup (string, optional) : (défaut : h3) niveau de titre

%>

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let alert = locals.alert || {};
let title = alert.title || false;
let text = alert.text || false;
let type = alert.type || false;
let size = alert.size || "md";
const icon = alert.icon || false;
let classes = alert.classes || [];
const markup = alert.markup || 'h3';
let attributes = alert.attributes || {};
if (alert.id) attributes.id = alert.id;
classes.push(prefix + '-alert');
if (type) classes.push(prefix + '-alert--' + type);
if (icon) classes.push(\`\${prefix}-icon-\${icon}\`);
if (alert.alert) attributes.role = "alert";
if (size !== "md") classes.push(prefix + '-alert--' + size);
 %>

<div <%- includeAttrs(attributes); %> <%- includeClasses(classes); %>>

  <% if (title) { %>
    <<%= markup %> class="<%= prefix %>-alert__title"><%= title %></<%= markup %>>
  <% } %>

  <% if (text) { %>
    <p><%= text %></p>
  <% } %>

  <% if (alert.dismissible) { %>
    <%- include('../../../button/template/ejs/button', {button: {size: 'md', classes: [\`\${prefix}-btn--close\`], ...alert.button}}) %>
  <% } %>
</div>
`,Ln=[{names:["alert"],partial:Pn}],$n=`<%#
# paramètres badge

* badge (object, required) : Objet contenant les paramètres

** label (string, required) : classes supplémentaires sur l'element

** type (string, optional) : le type défini la couleur du badge (error/success/warning/new)

** accent (string, optional) : défini la couleur d'accentuation (type ne doit pas être défini)

** markup (string, optional) : balise html du markup (default: p)

** classes (array, optional) : classes supplémentaires sur l'element

** attrs (object, optional) : Attributs supplémentaires sur l'element

** icon (string, optional) : nom de l'icône du badge ou 'false' pour désactiver l'icone

** ellipsis (boolean, optional) [default: false] : Si true, ajoute un span ellipsis autour du Libellé

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let badge = locals.badge || {};
const markup = badge.markup || 'p';
const classes = badge.classes || [];
const attrs = badge.attrs || {};
classes.push(prefix + '-badge');
if (badge.id) attrs.id = badge.id;

switch(badge.size) {
	case 'sm':
			classes.push(prefix + '-badge--sm');
		break;
}

if (badge.type !== undefined) classes.push(prefix + '-badge--' + badge.type);

else if (badge.accent !== undefined) classes.push(prefix + '-badge--' + badge.accent);

if (badge.icon === false) classes.push(prefix + '-badge--no-icon');
else if (badge.icon !== undefined) {
	classes.push(prefix + '-icon-' + badge.icon);
	classes.push(prefix + '-badge--icon-left');
}

if (badge.ellipsis) badge.label = \`<span class="\${prefix}-ellipsis">\${badge.label}</span>\`;
%>

<<%= markup %> <%- includeAttrs(attrs)%> <%- includeClasses(classes)%>><%- badge.label %></<%= markup %>>
`,En=`<%#
# paramètres groupe de badge

* badgesGroup.badges (array, required): paramètres spécifique de chaque badge du groupe

* badgesGroup.size (string, optional) : définie la taille des badges dans le groupe (default md)
  * sm : Badge taille sm

* badgesGroup.groupMarkup (string, optional) : Type de balise pour le groupe de badges (default ul)

* badgesGroup.classes (array, optionnal) : Classes suplémentaires sur le groupe de badges

* badgesGroup.attributes (object, optionnal) : Attributs suplémentaires sur le groupe de badges

#%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const badgesGroup = locals.badgesGroup || {};
const groupClasses = badgesGroup.classes || [];
const groupAttrs = badgesGroup.attributes || {};
const badges = badgesGroup.badges || [];
const groupMarkup = badgesGroup.groupMarkup || 'ul';
groupClasses.push(prefix + '-badges-group');
const isList = groupMarkup === 'ul';

switch(badgesGroup.size) {
  case 'sm':
    groupClasses.push(prefix + '-badges-group--sm');
    break;
 }
 %>

<<%= groupMarkup %> <%- includeClasses(groupClasses) %> <%- includeAttrs(groupAttrs) %>>
<% for (let i = 0; i < badges.length; i++) { %>
  <% if (isList) { %>
    <li>
  <% } %>
    <%- include('./badge.ejs', { badge:badges[i] }); %>
  <% if (isList) { %>
    </li>
  <% } %>
<% } %>
</<%= groupMarkup %>>
`,Tn=[{names:["badge"],partial:$n},{names:["badges-group"],partial:En}],Sn=`<%#
# paramètres breadcrumb

* breadcrumb.id (required):

* breadcrumb.segments (array, required) : Tableau de données de chaque segment du fil d'Ariane
  ** breadcrumb.segments[].path : partie de l'url
  ** breadcrumb.segments[].label : le libellé du segment
  ** breadcrumb.segments[].markup : tag html des boutons (a/button), si non défini, a

* breadcrumb.button: Libellé du bouton du Fil d'Ariane en mobile

%>

<% eval(include('../../../../core/index.ejs')); %>

<%
let breadcrumb = locals.breadcrumb || {segments : []};
if (breadcrumb.button === undefined) breadcrumb.button = 'Voir le fil d’Ariane';
%>

<nav role="navigation" class="<%= prefix %>-breadcrumb" aria-label="vous êtes ici :">
  <button type="button" class="<%= prefix %>-breadcrumb__button" aria-expanded="false"
    aria-controls="<%= breadcrumb.id %>"><%= breadcrumb.button %></button>
  <div class="<%= prefix %>-collapse" id="<%= breadcrumb.id %>">
    <ol class="<%= prefix %>-breadcrumb__list">
      <%
        let path = '';
        for (let i = 0; i < breadcrumb.segments.length; i++) {
            const segmentAttrs = {};
            const segment = breadcrumb.segments[i];
            const markup = segment.markup || 'a';
            if (markup === 'button') segmentAttrs.type = 'button';
            if (segment.path != undefined) path += segment.path + '/';
            if (segment.id) segmentAttrs.id = segment.id;
            if (i === breadcrumb.segments.length - 1) {
              segmentAttrs['aria-current'] = 'page';
            } else {
              if (markup == 'a') {
                if (segment.href) {
                  segmentAttrs['href'] = segment.href;
                } else {
                  segmentAttrs['href'] = path;
                }
              }
            }
        %>
      <li>
        <<%= markup %> class="<%= prefix %>-breadcrumb__link" <%- includeAttrs(segmentAttrs);%>><%= segment.label %></<%= markup %>>
      </li>
      <% } %>
    </ol>
  </div>

</nav>
`,Gn=[{names:["breadcrumb"],partial:Sn}],Mn=`<%#
# paramètres button-close

* button.label (string, required) : contenu texte

* button.closeId (string, required): id de l'élément à fermer

* button.title (string, optional) : titre du lien

* button.id (string) : id de l'élément

* button.classes (array, optional) : Classes supplémentaires sur l'élément

%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const button = locals.button || {};

button.markup = 'button';
let buttonClasses = button.classes || [];
buttonClasses.push(prefix + '-btn--close');
if (!button.attributes) button.attributes = {};
button.label = button.label || 'Fermer';
button.title = button.title || button.label || 'Fermer';
button.id = button.id || uniqueId('button');
if (button.closeId) button.attributes['aria-controls'] = button.closeId;
%>

<%- include('./button.ejs', {button: {...button, classes: buttonClasses }});%>
`,Dn=`<%#
# paramètres groupe de boutons

* buttonsGroup.buttons (array, required): paramètres spécifique de chaque bouton du groupe

* buttonsGroup.groupMarkup (string) : si non défini, ul

* buttonsGroup.inline (string|boolean, optional) : aligne les boutons horizontalement (dans la mesure du possible)
valeurs :
  * true : toujours en ligne
  * sm : en ligne a partir du breakpoint SM
  * md : en ligne a partir du breakpoint MD
  * lg : en ligne a partir du breakpoint LG

* buttonsGroup.align (string, optional) : définie l'alignement horizontal des boutons dans le groupe
  * right : align les boutons sur la droite
  * left : align les boutons sur la gauche
  * center : align les boutons au centre

* buttonsGroup.size (string, optional) : définie la taille des boutons dans le groupe (default md)
  * sm : Boutons taille sm
  * lg : Boutons taille lg

* buttonsGroup.equisized (boolean, optional) : si valeur true, fixe la largeur des boutons a celle du plus grand

* buttonsGroup.reverse (boolean, optional) : si valeur true, inverse l'ordre des boutons en mode inline

* buttonsGroup.classes (array, optional) : Classes suplémentaires sur le groupe de boutons

* buttonsGroup.attributes (object, optional) : Attributs suplémentaires sur le groupe de boutons

* buttonsGroup.iconPlace (string, optional) : emplacement des icones sur le groupe de bouton
valeurs :
    ** left : icone à gauche du libellé
    ** right : icone à droite du libellé

* buttonsGroup.iconPlace (string, optional) : emplacement des icones sur le groupe de bouton
valeurs :
    ** left : icone à gauche du libellé
    ** right : icone à droite du libellé

#%>

<% eval(include('../../../../core/index.ejs')); %>

<%
 const buttonsGroup = locals.buttonsGroup || {};
 const groupMarkup = buttonsGroup.groupMarkup || 'ul';
 const isList = groupMarkup === 'ul';
 let groupClasses = buttonsGroup.classes || [];
 let groupAttrs = buttonsGroup.attributes || {};
 let buttons = buttonsGroup.buttons || [];
 groupClasses.push(prefix + '-btns-group');

 if (buttonsGroup.align) groupClasses.push(prefix + '-btns-group--'+buttonsGroup.align);
 if (buttonsGroup.equisized) groupClasses.push(prefix + '-btns-group--equisized');
 if (buttonsGroup.reverse) groupClasses.push(prefix + '-btns-group--inline-reverse');


 switch(buttonsGroup.inline) {
     case true:
        groupClasses.push(prefix + '-btns-group--inline');
        break;
     case 'sm':
        groupClasses.push(prefix + '-btns-group--inline-sm');
        break;

     case 'md':
        groupClasses.push(prefix + '-btns-group--inline-md');
        break;

     case 'lg':
        groupClasses.push(prefix + '-btns-group--inline-lg');
        break;
 }

 switch(buttonsGroup.size) {
  case 'sm':
    groupClasses.push(prefix + '-btns-group--sm');
    break;

  case 'lg':
    groupClasses.push(prefix + '-btns-group--lg');
    break;
 }

 if (buttonsGroup.iconPlace !== undefined) switch(buttonsGroup.iconPlace) {
  case 'left':
    groupClasses.push(prefix + '-btns-group--icon-left');
    break;

  case 'right':
    groupClasses.push(prefix + '-btns-group--icon-right');
    break;
 }
 %>

<<%= groupMarkup %> <%- includeClasses(groupClasses) %> <%- includeAttrs(groupAttrs) %>>
  <% for (let i = 0; i < buttons.length; i++) { %>
    <% if (isList) { %>
      <li>
    <% } %>
    <%
      const button = buttons[i];
      let path;
      switch(button.template) {
        case 'display':
          path = './button-display.ejs';
          break;

        case 'close':
          path = './button-close.ejs';
          break;

        default:
          path = './button.ejs';
      }
    %>
    <%- include(path, {button:button}); %>
    <% if (isList) { %>
      </li>
    <% } %>
  <% } %>
</<%= groupMarkup %>>
`,zn=`<%#
# paramètres button-display

* button.label (string, required) : contenu texte

* button.title (string, optional) : titre du bouton

* button.classes (array, optional) : Classes suplémentaires sur le bouton

* button.attributes (object, optional) : Attributs suplémentaires sur le bouton

* button.id (string) : id de l'élément

%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const button = locals.button || {};

button.markup = 'button';
if (!button.classes) button.classes = [];
if (!button.attributes) button.attributes = {};
button.classes.push(prefix + '-btn--display');
button.id = button.id || uniqueId('button');
button.label = button.label || 'Paramètres d\\'affichage';
button.title = button.title || button.label || 'Paramètres d\\'affichage';

%>
<%- include('./button.ejs', button);%>
`,Bn=`<%#
# paramètres button

* button.label (string, required) : Libellé du bouton

* button.markup (string,optional) : tag html du bouton (a/button/input), si non défini, button

* button.id (string, optional) : id du bouton

* button.kind (number, optional) : par défaut 1, qui équivaut au bouton primaire, sinon 2 pour secondaire, 3 pour tertiaire, et 4 pour tertiaire sans contour

* button.type (string, optional) type du bouton

* button.title (string, optional) Attribut 'title' du bouton

* button.disabled (boolean, optional) : si valeur true, bouton désactivé

* button.size (string, optional) : modificateur de taille
valeurs :
    ** sm : bouton petit
    ** lg : bouton large

* button.icon (string, optional) : nom de l'icone dans le bouton

* button.iconPlace (string, optional) : emplacement de l'icone
si non défini alors que le paramètre icon est défini, bouton avec icone seule, sans libellé
valeurs :
    ** left : icone à gauche du libellé
    ** right : icone à droite du libellé

* button.classes (array, optional) : Classes suplémentaires sur le bouton

* button.attributes (object, optional) : Attributs suplémentaires sur le bouton

* button.tooltip (object, optional) : Paramètres de l'infobulle associée au bouton

%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const button = locals.button || {};
let btnClasses = button.classes || [];
let btnAttrs = button.attributes || {};
const markup = button.markup || 'button';
let type = button.type;
if (!type && markup !== 'a') type = 'button';
btnClasses.push(prefix + '-btn');

switch(button.size) {
  case 'sm':
    btnClasses.push(prefix + '-btn--sm');
    break;

  case 'lg':
    btnClasses.push(prefix + '-btn--lg');
    break;
}

if (button.icon !== undefined) btnClasses.push(prefix + '-icon-' + button.icon);

if (button.iconPlace !== undefined) switch(button.iconPlace) {
  case 'left':
    btnClasses.push(prefix + '-btn--icon-left');
    break;

  case 'right':
    btnClasses.push(prefix + '-btn--icon-right');
    break;
}

switch (button.kind) {
  case 2:
    btnClasses.push(prefix +'-btn--secondary');
    break;

  case 3:
    btnClasses.push(prefix +'-btn--tertiary');
    break;

  case 4:
    btnClasses.push(prefix +'-btn--tertiary-no-outline');
    break;
}

if (button.disabled !== true) {
  if (button.onclick) btnAttrs.onclick = button.onclick;
}

if (button.title) btnAttrs['title'] = button.title;
if (button.tooltip && button.tooltip.id) btnAttrs['aria-describedby'] = button.tooltip.id;
%>

<% if (button.comments) { %><!-- <%= button.comments %> --><% } %>
<%- include('../../../../core/template/ejs/action/action', {action: {...button, classes: btnClasses, attributes: btnAttrs, type: type, markup: markup}}) %>

<% if (button.tooltip) { %>
  <%- include('../../../tooltip/template/ejs/tooltip.ejs', {tooltip: button.tooltip}); %>
<% } %>
`,Fn=[{names:["button-close"],partial:Mn},{names:["buttons-group"],partial:Dn},{names:["button-display"],partial:zn},{names:["button"],partial:Bn}],Nn=`<%#
# paramètres callout (mise en avant)

* callout.title (string, optional): Titre de la mise en avant

* callout.text (string, optional): texte de la mise en avant

* callout.classes (array, optional): Classes suplémentaires sur la mise en avant

* callout.button (string, optional): label du bouton dans la mise en avant

* callout.buttonTpl (string, optional): Chemin vers le sample de bouton a utiliser

* callout.accent (string, optional): Couleur d'accenturation du composant

* callout.icon (string, optional): nom de l'icône du composant

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
 let callout = locals.callout || {};
 let classes = callout.classes || [];
 let attributes = callout.attributes || {};
 classes.push(prefix + '-callout');
 const markup = callout.markup || 'h3';

 if (callout.icon !== undefined) classes.push(prefix + '-icon-' + callout.icon);
 if (callout.accent !== undefined) classes.push(prefix + '-callout--' + callout.accent);
 if (callout.id !== undefined) attributes.id = callout.id;
 let pClasses = [];

 %>

<div <%- includeAttrs(attributes); %> <%- includeClasses(classes); %>>

  <% if(callout.title !== undefined) { %>
    <<%= markup %> class="<%= prefix%>-callout__title"><%= callout.title %></<%= markup %>>
  <% } %>

  <%- include('../../../../core/template/ejs/typography/paragraph', {paragraph: {content: callout.text, classes: [\`\${prefix}-callout__text\`]}}) %>

  <% if(callout.button !== undefined) {
        if (callout.icon === undefined) callout.button.icon = undefined;
  %>
    <%- include('../../../button/template/ejs/button.ejs', {button: callout.button}); %>
  <% } else if (callout.buttonTpl !== undefined) { %>
    <%- include(callout.buttonTpl, {button: {icon:undefined}}); %>
  <% } %>
</div>
`,On=[{names:["callout"],partial:Nn}],Rn=`<%#
# paramètres de la carte

* card.content (object, required) : Contenu central de la carte

* card.header (object, optionnal) : Partie haute de la carte vertical, contenant l'image

* card.footer (object, optionnal) : Partie basse de la carte vertical, contenant les actions

* card.size (string, optionnal) : Taille de la carte

* card.enlarge (boolean, optional) : si true, agrandi la zone de clic à toute la carte

* card.horizontal (boolean || object, optional) : si true, passe la card en mode horizontal
  ** card.horizontal.proportion (string, optional) : proportion de l'image par rapport à la carte en horizontal (valeurs : tier, half)

* card.icon (string or boolean, optional) : icône illustrative ou suppression de l'icon avec false

* card.variations (array, optional): variations ésthétiques de la carte (valeurs: accent, no-border, no-background, shadow)

* card.download (boolean, optional): Si true, carte de téléchargement

* card.classes (array, optional): Classes suplémentaires sur le composant

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const card = locals.card || {};
const classes = card.classes || [];
const attributes = card.attributes || {};
classes.push(\`\${prefix}-card\`);
const content = card.content || {};

if (card.id) attributes.id = card.id;

if (card.enlarge) switch (card.content.actionMarkup) {
  case 'button':
    classes.push(\`\${prefix}-enlarge-button\`);
    break;

  default:
    classes.push(\`\${prefix}-enlarge-link\`);
}

switch (card.size) {
  case 'sm':
    classes.push(\`\${prefix}-card--sm\`);
    break;

  case 'lg':
    classes.push(\`\${prefix}-card--lg\`);
    break;
}

if (card.horizontal !== undefined) {
  switch (card.horizontal.proportion) {
    case 'half':
      classes.push(\`\${prefix}-card--horizontal-half\`);
      break;

    case 'tier':
      classes.push(\`\${prefix}-card--horizontal-tier\`);
      break

    default:
      classes.push(\`\${prefix}-card--horizontal\`);
  }
}

if (card.download === true) {
  classes.push(\`\${prefix}-card--download\`);
  content.downloadable = true;
}

switch (card.icon) {
  case undefined:
    break;

  case false:
    classes.push(\`\${prefix}-card--no-icon\`);
    break;

  default:
    classes.push(\`\${prefix}-icon-\${card.icon}\`);
}

if (card.variations) for (const variation of card.variations) switch(variation) {
  case 'grey':
    classes.push(\`\${prefix}-card--grey\`);
    break;

  case 'no-border':
    classes.push(\`\${prefix}-card--no-border\`);
    break;

  case 'no-background':
    classes.push(\`\${prefix}-card--no-background\`);
    break;

  case 'shadow':
    classes.push(\`\${prefix}-card--shadow\`);
    break;
}

%>
<div <%- includeAttrs(attributes) %> <%- includeClasses(classes) %>>
  <div class="<%= prefix %>-card__body" >
    <%- include('card-content.ejs', { content: content}) %>
    <% if (card.footer !== undefined) { %>
      <%- include('card-footer.ejs', { footer: card.footer}) %>
    <% } %>
  </div>
  <% if (card.header !== undefined) { %>
    <%- include('card-header.ejs', { header: card.header}) %>
  <% } %>
</div>
`,Vn=`<%#
# paramètres du contenu principal de la carte

* content.title (string, required) : Titre de la carte

* content.href (string, optional) : href du lien de la carte

* content.noLink (boolean, optional) : présence du lien

* content.description (string, optional) : Description

* content.badgesGroup (array, optional) : Groupe de badges (voir badge)

* content.tagsGroup (array, optional) : Groupe de tags (voir tag)

* content.details (array, optional) : Détails

* content.blank (boolean, optional) : Ajoute l'attribut target="_blank" pour ouvrir le lien dans une nouvelle fenêtre, nécessite l'ajout d'un attribut title "intitulé - nouvelle fenêtre"

* content.markup (string, optional) : (défaut : h3) niveau de titre

* content.assess (String, optional): remplissage automatique du poids et format du fichier à telecharger (true ou "bytes")

* content.downloadable (boolean || string, optional) : Ajoute l'attribut download au lien, si string, ajoute la valeur comme nom de fichier

* content.lang (boolean, optional) : Ajoute l'attribut hreflang au lien, pour définir la langue du document lié

* content.disabled (boolean, optional) : Si true, retire le href du lien pour le désactiver

* content.attributes (object, optional) : Attributs à ajouter au lien

* content.actionMarkup (string, optional) : balise de l'actionneur du composant (a, button)

* content.actionTitle (string, optional) : Attribut title de l'actionneur

* content.actionType (string, optional) : Attribut type de l'actionneur

%>

<% eval(include('../../../../core/index.ejs')); %>

<%
let start, end;
const content = locals.content || {};
const markup = content.markup || 'h3';
const actionMarkup = content.actionMarkup || 'a';
const hasLink = !content.noLink;
const href = content.href || '#';
let attributes = content.attributes || {};

if (content.actionTitle) attributes.title = content.actionTitle;

if (actionMarkup === 'button') attributes.type = content.actionType || actionMarkup;

switch (actionMarkup) {
  case 'a':
    if (content.rel) attributes.rel = content.rel;
    if (content.lang) attributes.hreflang = content.lang;
    if (content.assess === true) {
        attributes[\`data-\${prefix}-assess-file\`] = ''
    } else if (typeof(content.assess) === 'string') {
        attributes[\`data-\${prefix}-assess-file\`] = content.assess
    }
    break;
}

if (content.downloadable === true && actionMarkup === 'a') attributes.download = '';
if (typeof(content.downloadable) === 'string') attributes.download = content.downloadable;

const startDetails = content.details ? content.details.filter(detail => !detail.position || detail.position === 'start') : [];

switch (true) {
    case content.badgesGroup !== undefined :
    case content.tagsGroup !== undefined :
    case startDetails.length > 0 :
      start = {};
      if (content.badgesGroup) start.badgesGroup = content.badgesGroup;
      if (content.tagsGroup) start.tagsGroup = content.tagsGroup;
      if (startDetails.length) start.details = startDetails;
      break;
}

const endDetails = content.details ? content.details.filter(detail => detail.position === 'end') : [];

switch (true) {
    case endDetails.length > 0 :
        end = {};
        if (endDetails.length) end.details = endDetails;
        break;
}
%>

<div class="<%= prefix %>-card__content">
    <<%= markup %> class="<%= prefix %>-card__title">
        <% if (hasLink) { %>
            <%- include('../../../../core/template/ejs/action/action.ejs', {action: {...content, attributes, markup: actionMarkup, label: content.title, disabled: content.disabled}}) %>
        <% } else { %>
            <%- content.title %>
        <% } %>
    </<%= markup %>>

    <% if (content.description !== undefined) { %>
        <p class="<%= prefix %>-card__desc"><%- content.description %></p>
    <% } %>

    <% if (start) { %>
        <%- include('card-start.ejs', {start: start }); %>
    <% } %>

    <% if (end) { %>
        <%- include('card-end.ejs', {end: end }); %>
    <% } %>
</div>
`,Wn=`<%#
# paramètres des détails de la carte

* details (array, required) : collection d'objet définissant les détails

* details[].label (string, required) : Intitulé du détail

* icon (string, optionnal) : nom de l'icon

%>

<% eval(include('../../../../core/index.ejs')); %>

<% for (const detail of details) {
    const detailClasses = [\`\${prefix}-card__detail\`];

    if (detail.icon) detailClasses.push(\`\${prefix}-icon-\${detail.icon}\`);
%>
    <p <%- includeClasses(detailClasses); %>><%- detail.label %></p>
<% } %>
`,Un=`<%#
# paramètres de la partie end du contenu principal de la carte, placé après titre et description

* end.details (array, optional) : Détails

%>

<% eval(include('../../../../core/index.ejs')); %>

<div class="<%= prefix %>-card__end" >

    <% if (end.details !== undefined) { %>
        <%- include('card-details.ejs', { details: end.details }); %>
    <% } %>

</div>
`,Jn=`<%#
# paramètres de l'en-tête de la carte

* header.img (object, optional) : paramètres de l'image

* header.vid (object, optional) : paramètres de vidéo

* header.badgesGroup (array, optional) : Groupe de badges (voir badge)

%>

<% eval(include('../../../../core/index.ejs')); %>

<div class="<%= prefix%>-card__header" >
    <% if (header.img) { %>
        <div class="<%= prefix %>-card__img">
            <%- include('../../../../core/template/ejs/media/responsive-img.ejs', {media: header.img}); %>
        </div>
    <% } else if (header.vid) { %>
        <div class="<%= prefix %>-card__vid">
            <%- include('../../../../core/template/ejs/media/responsive-vid.ejs', {media: header.vid}); %>
        </div>
    <% } %>

    <% if (header.badgesGroup) { %>
        <%- include('../../../badge/template/ejs/badges-group.ejs', {badgesGroup: header.badgesGroup }); %>
    <% } %>
</div>
`,Hn=`<%#
# paramètres de la zone d'action

* footer.buttonsGroup (object, optionnal) : paramètres de configuration d'un groupe de boutons

%>

<% eval(include('../../../../core/index.ejs')); %>

<div class="<%= prefix %>-card__footer" >
    <% if (footer.buttonsGroup) { %>
        <%- include('../../../button/template/ejs/buttons-group.ejs', { buttonsGroup: footer.buttonsGroup }); %>
    <% } %>
    <% if (footer.linksGroup) { %>
        <%- include('../../../link/template/ejs/links-group.ejs', { linksGroup: footer.linksGroup }); %>
    <% } %>
</div>
`,Xn=`<%#
# paramètres de la partie start du contenu principal de la carte, placés avant titre et description

* start.badgesGroup (array, optional) : Groupe de badges (voir badge)

* start.tagsGroup (array, optional) : Groupe de tags (voir tag)

* start.details (array, optional) : Détails

%>

<% eval(include('../../../../core/index.ejs')); %>

<div class="<%= prefix %>-card__start" >

    <% if (start.badgesGroup) { %>
        <%- include('../../../badge/template/ejs/badges-group.ejs', {badgesGroup: start.badgesGroup }); %>
    <% } %>

    <% if (start.tagsGroup) { %>
        <%- include('../../../tag/template/ejs/tags-group.ejs', {tagsGroup: start.tagsGroup }); %>
    <% } %>

    <% if (start.details) { %>
        <%- include('card-details.ejs', { details: start.details }); %>
    <% } %>

</div>
`,Qn=[{names:["card"],partial:Rn},{names:["card-content"],partial:Vn},{names:["card-details"],partial:Wn},{names:["card-end"],partial:Un},{names:["card-header"],partial:Jn},{names:["card-footer"],partial:Hn},{names:["card-start"],partial:Xn}],Zn=`<%#
# paramètres checkbox group

* checkbox.error (string, optional) : message d'erreur

* checkbox.size (string, optional) : la valeur sm permet d'opter pour de petites cases à cocher

* checkbox.valid (string, optional) : message de succès

* checkbox.attributes (object, optional): attributs sur l'input

%>
<% eval(include('../../../../core/index.ejs')); %>
<%
let checkbox = locals.checkbox || {};
let groupClasses = [prefix + '-checkbox-group'];
let describedby = [];
let checkboxAttrs = checkbox.attributes || {};

if (checkbox.error !== undefined) {
  groupClasses.push(prefix + '-checkbox-group--error');
  describedby.push('checkboxes-error-desc-error');
}

if (checkbox.valid !== undefined) {
  groupClasses.push(prefix + '-checkbox-group--valid');
  describedby.push('checkboxes-valid-desc-valid');
}

if (describedby.length > 0) checkboxAttrs['aria-describedby'] = describedby.join(' ');

switch(checkbox.size) {
  case 'sm' :
    groupClasses.push(prefix + '-checkbox-group--sm');
    break;
}
%>

<div <%- includeClasses(groupClasses); %>>
  <%- include('./checkbox', {checkbox: {...checkbox, attributes: checkboxAttrs}}); %>
</div>
`,Kn=`<%#
# paramètres checkbox

* checkbox.id (string, required): id du checkbox

* checkbox.attributes (object, optional): attributs sur l'input

* checkbox.name (object, optional): attributs sur l'input

* checkbox.label (string, optional): label du checkbox

* checkbox.hint (string, optional) : message de description additionel

* checkbox.disabled (boolean, optional) : si true, désactive la checkbox

* input.includeEmptyMessagesGroup (boolean, optional) : true par défaut

* checkbox.checked (boolean, optional) : si true, la checkbox est cochée

%>
<% eval(include('../../../../core/index.ejs')); %>
<% eval(include('../../../form/template/ejs/message/builder.js.ejs')); %>
<%
let checkbox = locals.checkbox || {};
let attributes = checkbox.attributes || {};
if (checkbox.checked === true) attributes.checked = "";
if (checkbox.disabled === true) attributes.disabled = "";
if (checkbox.name) attributes.name = checkbox.name;
attributes.id = checkbox.id;
attributes.type = "checkbox";
const describedby = [];
const label = {
  label: checkbox.label,
  for: checkbox.id,
  classes: checkbox.classes,
  hint: checkbox.hint
};

const builder = new MessageBuilder(checkbox.id, checkbox.includeEmptyMessagesGroup);

if (checkbox.valid) {
    builder.addValid(checkbox.valid);
}
if (checkbox.error) {
    builder.addError(checkbox.error);
}

if (builder.isIncluded) describedby.push(...builder.ids);

if (describedby.length > 0) attributes['aria-describedby'] = describedby.join(' ');

%>

<input <%- includeAttrs(attributes); %>>
<%- include('../../../form/template/ejs/label', { label: label } ); %>
<%- include('../../../form/template/ejs/message/messages-group', { messagesGroup: builder.messagesGroup }); %>
`,Yn=[{names:["checkbox-group"],partial:Zn},{names:["checkbox"],partial:Kn}],et=`<%#
# paramètres connect

* connect.id (string) : id du bouton connect

* connect.type (string) : attribut type du bouton connect

* connect.link (object, required) paramètres du lien france connnect
  ** connect.link.href (string, required) : lien vers france connect
  ** connect.link.label (string, required) : Libellé "Qu'est ce que france connect ?"
  ** connect.link.attributes (object, optionnal) : Attributs supplémentaire sur le lien (ex: {target:'_blank'})
  ** connect.link.newWindow (string, optionnal) : Libellé du lien pour ouvrir dans une nouvelle fenêtre

* connect.variant (string, optional) variante du bouton connect

* connect.login (string, required) : texte "Se connecter avec" du bouton

* connect.brand (string, required) : texte "FranceConnect" du bouton

* connect.disabled (boolean, optional) : si valeur true, bouton désactivé

* connect.markup (String, optional) : tag html du bouton, si valeur 'a', génère un lien au lieu d'un bouton

* isStandalone (boolean, optional): si valeur true, génére la version standalone (sans dsfr)

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const connect = locals.connect || {};
const connectClasses = [];
const connectAttrs = {};
if (connect.id) connectAttrs.id = connect.id;
const markup = connect.markup || 'button';
if (markup === 'a' && !connect.disabled) connectAttrs.href = '';
if (markup === 'button') connectAttrs.type = connect.type || 'button';
connectClasses.push(prefix + '-connect');

switch(connect.variant) {
  case 'plus':
    connectClasses.push(prefix + '-connect--plus');
  break;

  case 'agent':
    connectClasses.push(prefix + '-connect--agent');
  break;
}

const linkAttributes = connect.link.attributes || {};
newWindowLabel = connect.link.newWindow || getText('blank', 'global');
linkAttributes.id = connect.link.id || uniqueId('connect-link');
linkAttributes.target = '_blank';
linkAttributes.rel = 'noopener';
linkAttributes.title = \`\${connect.link.label} - \` + newWindowLabel;

if (!locals.isStandalone) {
%>
<div class="<%= prefix %>-connect-group">
<% } %>
<%
if (connect.disabled === true && markup !== 'a') connectAttrs.disabled = '';
%>

<<%= markup %> <%- includeClasses(connectClasses) %> <%- includeAttrs(connectAttrs); %> >
  <span class="<%= prefix %>-connect__login"><%- connect.login %></span>
  <span class="<%= prefix %>-connect__brand"><%- connect.brand %></span>
</<%= markup %>>

<% if (connect.link) { %>
  <p>
    <a href="<%= connect.link.href %>" <%- includeAttrs(linkAttributes); %>><%= connect.link.label %></a>
  </p>
<% } %>

<% if (connect.desc) { %>
  <p>
  <%- connect.desc %>
  </p>
<% } %>

<% if (!locals.isStandalone) { %>
</div>
<% } %>
`,nt=[{names:["connect"],partial:et}],tt=`<%#
# paramètres de la banière de consentement

* consent.title (string, recommended) : Titre du bloc

* consent.body (string, optional) : Texte explicatif, contenu textuel ou html

* consent.buttons (array, optional): paramètres spécifique de chaque bouton du groupe

* consent.classes (array, optional) : Classes supplémentaires sur l'element

* consent.attributes (object, optional) : Attributs supplémentaires sur l'element

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let consent = locals.consent || {};
let classes = [...consent.classes || [], prefix + '-consent-banner'];
let attributes = consent.attributes || {};
btnModalAttr = [];
btnModalAttr['data-' + prefix + '-opened'] = false;
btnModalAttr['aria-controls'] = prefix + '-consent-modal';
let buttons = consent.buttons || [
  { label: 'Tout accepter', title: 'Autoriser tous les cookies' },
  { label: 'Tout refuser',  title: 'Refuser tous les cookies' },
  { label: 'Personnaliser', kind: 2, attributes: btnModalAttr, title: 'Personnaliser les cookies' }
];
%>

<div <%- includeClasses(classes); %> <%- includeAttrs(attributes) %>>
  <% if (consent.title) { %><h2 class="<%= prefix %>-h6"><%= consent.title %></h2><% } %>
  <% if (consent.body) { %><div class="<%= prefix %>-consent-banner__content"><%- consent.body %></div><% } %>
  <%- include('../../../button/template/ejs/buttons-group.ejs', {buttonsGroup: {classes: [prefix + '-consent-banner__buttons'], inline: 'sm', align:'right', reverse: true, buttons: buttons}}); %>
</div>
`,at=`<%#
# paramètres du gestionnaire de consentement

* consent.finalities (array, required) : Tableau de finalités
  ** consent.finalities[].title (string, recommanded): titre de la finalité
  ** consent.finalities[].desc (string, optional): texte de description additionnel
  ** consent.finalities[].radios (array, optional): paramètres de boutons radios (par défaut 2 éléments accepter/refuser)
  ** consent.finalities[].services (array, optional) : Tableau de sous-finalités
    *** consent.finalities[].services[].title (string, recommanded): titre de la finalité
    *** consent.finalities[].services[].desc (string, optional): texte de description additionnel

* consent.buttons (array, required): paramètres spécifique de chaque bouton du groupe

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let consent = locals.consent || {};
let finalities = consent.finalities || [];
let buttons = consent.buttons || [{label: 'Confirmer mes choix'}];
%>

<div class="<%= prefix %>-consent-manager">
  <!-- Finalités -->
  <% for (finality = 0; finality < finalities.length; finality++) { %>
  <div class="<%= prefix %>-consent-service <%- (finality === 0) ? prefix + '-consent-manager__header' : ''; %>">
    <%
      let fieldsetAttrs = {};
      if (finalities[finality].title && finalities[finality].desc) {
        fieldsetAttrs['aria-labelledby'] = finalities[finality].id + '-legend ' + finalities[finality].id + '-desc';
        fieldsetAttrs['role'] = 'group';
      }
    %>
    <fieldset <%- includeAttrs(fieldsetAttrs) %> class="<%= prefix %>-fieldset">
      <% if (finalities[finality].title) { %>
        <legend id="<%= finalities[finality].id %>-legend" class="<%= prefix %>-consent-service__title"><%- finalities[finality].title %></legend>
      <% } %>
      <div class="<%= prefix %>-consent-service__radios">
        <%- include('../../../radio/template/ejs/radio-group', {radio: {...finalities[finality].radios[0]}} ) %>
        <%- include('../../../radio/template/ejs/radio-group', {radio: {...finalities[finality].radios[1]}} ) %>
      </div>
      <% if (finalities[finality].desc) { %>
        <p id="<%= finalities[finality].id %>-desc" class="<%= prefix %>-consent-service__desc"><%- finalities[finality].desc %></p>
      <% } %>

      <% if (finalities[finality].services) { %>
        <div class="<%= prefix %>-consent-service__collapse">
          <button type="button" class="<%= prefix %>-consent-service__collapse-btn" aria-expanded="false" aria-describedby="<%= finalities[finality].id + '-legend' %>" aria-controls="<%= finalities[finality].id  %>-collapse"> Voir plus de détails</button>
        </div>

        <div class="<%= prefix %>-consent-services <%= prefix %>-collapse" id="<%= finalities[finality].id  %>-collapse">
          <!-- Sous finalités -->
          <% for (service = 0; service < finalities[finality].services.length; service++) { %>
            <div class="<%= prefix %>-consent-service">
              <%
                let fieldsetAttrs = {};
                if (finalities[finality].services[service].title && finalities[finality].services[service].desc) {
                  fieldsetAttrs['aria-labelledby'] = finalities[finality].services[service].id  + '-legend ' + finalities[finality].services[service].id + '-desc';
                  fieldsetAttrs['role'] = 'group';
                }
              %>
              <fieldset <%- includeAttrs(fieldsetAttrs) %> class="<%= prefix %>-fieldset <%= prefix %>-fieldset--inline">
              <% if (finalities[finality].services[service].title) { %>
                <legend id="<%= finalities[finality].services[service].id %>-legend" class="<%= prefix %>-consent-service__title" <%- (finalities[finality].services[service].desc) ? includeAttrs({'aria-describedby' : finalities[finality].services[service].id + '-desc'}) : '' %>><%- finalities[finality].services[service].title %></legend>
              <% } %>
              <div class="<%= prefix %>-consent-service__radios <%= prefix %>-fieldset--inline">
                <%- include('../../../radio/template/ejs/radio-group', {radio: {...finalities[finality].services[service].radios[0]}} ) %>
                <%- include('../../../radio/template/ejs/radio-group', {radio: {...finalities[finality].services[service].radios[1]}} ) %>
              </div>
              <% if (finalities[finality].services[service].desc) { %>
                <p id="<%= finalities[finality].services[service].id %>-desc" class="<%= prefix %>-consent-service__desc"><%- finalities[finality].services[service].desc %></p>
              <% } %>
              </fieldset>
            </div>
          <% } %>

        </div>
      <% } %>
    </fieldset>
  </div>
  <% } %>

  <!-- Bouton de confirmation/fermeture -->
  <%- include('../../../button/template/ejs/buttons-group.ejs', {buttonsGroup: {classes: [prefix + '-consent-manager__buttons'], size: 'md', inline: 'sm', align:'right', buttons: buttons}}); %>
</div>
`,it=`<%#
# paramètres placeholder de consentement

* consent.title (string, recommended) : Titre du placeholder

* consent.body (string, optional) : Texte explicatif, contenu textuel ou html

* consent.button (object, optional) : Pour modifier le bouton (par exemple le texte dans le bouton : button.label)

* consent.classes (array, optional) : Classes supplémentaires sur l'element

* consent.attributes (object, optional) : Attributs supplémentaires sur l'element

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let consent = locals.consent || {};
let classes = [...consent.classes || [], prefix + '-consent-placeholder'];
let attributes = consent.attributes || {};
let button = consent.button || {};
if (!button.label) button.label = "Autoriser";
button.markup = 'button';
%>

<div <%- includeClasses(classes); %> <%- includeAttrs(attributes) %>>
  <% if (consent.title) { %><h4 class="<%= prefix %>-h6"><%= consent.title %></h4> <% } %>
  <% if (consent.body) { %><p><%- consent.body %></p><% } %>
  <%- include('../../../button/template/ejs/button.ejs', {button: button}); %>
</div>
`,st=[{names:["consent-banner"],partial:tt},{names:["consent-manager"],partial:at},{names:["consent-placeholder"],partial:it}],rt=`<%#
# paramètres content

* content.size (string, optional) : taille du contenu

* content.img (object, optional): paramètres de l'image
    ** src (string, required) : url de l'image
    ** alt (string, optional) : texte alternatif
    ** ratio (string, optional) : ratio de l'image
    ** style (string, optional) : style de l'image
    ** attributes (object, optional) : Attributs supplémentaires sur l'image

* content.svg (string, optional): image en svg

* content.vid (object, optional): paramètres de la vidéo
    ** src (string, required) : url de la vidéo
    ** title (string, optional) : titre de la vidéo
    ** ratio (string, optional) : ratio de la vidéo
    ** attributes (object, optional) : Attributs supplémentaires sur la balise video

* content.caption (string, optional): paramètres de l'image

* content.link (string, optional): paramètre du lien sur le caption
    ** label (string, required) : texte du lien
    ** href (string, optional) : url du lien

* content.classes (array, optional) : Classes supplémentaires sur l'élément

* content.attributes (object, optional) : Attributs supplémentaires sur l'élément

* content.transcription (object, optional) : Attributs de la transcription sur l'élément

%>
<% eval(include('../../../../core/index.ejs')); %>
<% let content = locals.content || {} %>

<%
let classes = content.classes || [];
let attributes = content.attributes || [];
classes.push(prefix + '-content-media');

if (content.id) attributes.id = content.id;

switch (content.size) {
    case 'sm':
        classes.push(prefix + '-content-media--sm');
        break;

    case 'lg':
        classes.push(prefix + '-content-media--lg');
        break;
}

let type;
switch (true) {
    case content.img !== undefined:
    case content.svg !== undefined:
      type = 'img';
      break;

    case content.vid !== undefined:
        type = 'vid';
        break;
}

if (type === 'img' && content.caption != undefined) attributes["aria-label"] = content.caption;

%>

<figure role="group" <%- includeClasses(classes); %> <%- includeAttrs(attributes); %>>
<%
switch(type) {
    case 'img':
%>
        <div class="<%= prefix %>-content-media__img" >
            <% if (content.img != undefined) { %>
                <%- include('../../../../core/template/ejs/media/responsive-img.ejs', {media: content.img}); %>
            <% } else if (content.svg != undefined) { %>
                <%- content.svg %>
            <% } %>
        </div>
<%      break;

    case 'vid':
%>
        <% if (content.consent !== undefined) { %>
            <div class="<%= prefix %>-responsive-vid">
            <%- include('../../../consent/template/ejs/consent-placeholder', {consent: content.consent}) %>
            </div>
        <% } else { %>
            <%- include('../../../../core/template/ejs/media/responsive-vid', {media: content.vid}) %>
        <% } %>
<%      break;
}
%>

<% if (content.caption != undefined) { %>
    <figcaption class="<%= prefix %>-content-media__caption" >
        <%= content.caption %>
        <% if (content.link != undefined) {
            let data = {
                label: content.link.label,
                href: content.link.href
            }
        %>
            <%- include('../../../link/template/ejs/link', {link: data}); %>
        <% } %>
    </figcaption>
<% } %>
</figure>

<%
if (content.transcription != undefined) {
    let data = content.transcription;
%>
    <%- include('../../../transcription/template/ejs/transcription', {transcription: data}); %>
<% } %>
`,lt=[{names:["content-media"],partial:rt}],ot=`<%#
# paramètres follow

* follow.classes (array, required) : Classes supplémentaires

* follow.attributes (array, optional) : attributs spécifiques

* follow.socials (object, optional) : données des réseaux sociaux (cf: socials.ejs)

* follow.newsletter (object, optional) : données du bloc newsletter (cf: newletter.ejs)

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const follow = locals.follow || {};
const followClasses = follow.classes || [];
followClasses.push(prefix + '-follow');
const followAttributes = follow.attributes || {};
followAttributes.id = follow.id || uniqueId('follow');

const socials = follow.socials || undefined;
const newsletter = follow.newsletter || undefined;
%>

<div <%- includeClasses(followClasses); %> <%- includeAttrs(followAttributes) %>>
  <div class="<%= prefix %>-container">
    <div class="<%= prefix %>-grid-row">
      <%
      let gClasses = [prefix+'-col-12'];
      if (follow.newsletter) {
        if (follow.socials) gClasses = [prefix+'-col-12', prefix+'-col-md-8'] %>
        <div <%- includeClasses(gClasses) %> >
          <%- include('newsletter.ejs', {newsletter: follow.newsletter}); %>
        </div>
      <% }
      if (follow.socials) {
        if (follow.newsletter) gClasses = [prefix+'-col-12', prefix+'-col-md-4'];
      %>
        <div <%- includeClasses(gClasses) %>>
          <%- include('socials.ejs', {socials: follow.socials}); %>
        </div>
      <% } %>
    </div>
  </div>
</div>
`,dt=`<%#
# paramètres newsletter

* newsletter.title (string, required) : titre du bloc newsletter

* newsletter.desc (string, optional) : description du bloc newsletter

* newsletter.type (string, optional) [button|form]: type de bloc newsletter (avec bouton ou avec formulaire)

* newsletter.form (object, optional) : paramètres du formulaire champ/boutton (si type form)
  ** newsletter.form.action (string, optional) : Attribute action du formulaire
  ** newsletter.form.input (object, required) : paramètres du champ mail
  ** newsletter.form.button (object, required) : paramètres du boutton
  ** newsletter.form.error (string, optional) : texte d'erreur
  ** newsletter.form.valid (string, optional) : texte valide
  ** newsletter.form.hint (string, optional) : texte additionel

* newsletter.button (object, optional) : paramètres du boutton (si type button)

%>
<% eval(include('../../../../core/index.ejs'));

let newsletter = locals.newsletter || {};
let newsletterClasses = [prefix + '-follow__newsletter'];
%>

<div <%- includeClasses(newsletterClasses); %> >
  <div>
    <h2 class="<%= prefix %>-h5"><%- newsletter.title %></h2>
    <% if (newsletter.desc) { %>
    <p class="<%= prefix %>-text--sm"><%- newsletter.desc %></p>
    <% } %>
  </div>
  <div>
    <% if (newsletter.type === 'form') { %>
      <% if (newsletter.form && newsletter.form.input) { %>
        <form action="<%= newsletter.form.action %>">
          <%- include('../../../input/template/ejs/input-group.ejs', {input: {addon: true, describedby: [\`\${newsletter.form.input.id}-hint-text\`], ...newsletter.form.input}}); %>
          <% if (newsletter.form.hint) { %>
            <p id="<%= newsletter.form.input.id %>-hint-text" class="<%= prefix %>-hint-text"><%- newsletter.form.hint %></p>
          <% } %>
        </form>
      <% } %>
    <% } else if (newsletter.type === 'button') { %>
      <%- include('../../../button/template/ejs/buttons-group.ejs', {buttonsGroup: {inline: 'md', buttons: [newsletter.button]}}); %>
    <% } else if (newsletter.type === 'alert') { %>
      <%- include('../../../alert/template/ejs/alert.ejs', {alert: newsletter.alert}); %>
    <% } %>
  </div>
</div>
`,ct=`<%#
# paramètres socials

* socials.title (string, required) : titre du bloc réseaux sociaux

* socials.networks (array, required) : Tableau de réseaux sociaux
  ** socials.networks[].label (string, required) : nom du réseau social
  ** socials.networks[].url (string, required) : adresse url du réseau social

%>
<% eval(include('../../../../core/index.ejs'));

let socials = locals.socials || {buttons: []};
let socialsClasses = [prefix + '-follow__social'];

const mapSocialButton = (data) => {
  const button = {
      markup: 'a',
      title: data.title,
      label: data.label,
      href: data.url,
      id: data.id || uniqueId('social-button'),
      blank: true,
      classes: []
  }
  if (data.classes) button.classes = data.classes;
  if (data.type) button.classes.push(\`\${prefix}-btn--\${data.type}\`);
  if (data.attributes) button.attributes = data.attributes;

  return button;
};

const buttonsGroup = {
    size: socials.size || 'md',
    buttons: socials.buttons.map(button => mapSocialButton(button))
}
%>

<div <%- includeClasses(socialsClasses); %> >
  <h2 class="<%= prefix %>-h5"><%- socials.title %></h2>
  <%- include('../../../button/template/ejs/buttons-group', {buttonsGroup : buttonsGroup}); %>
</div>
`,ut=[{names:["follow"],partial:ot},{names:["newsletter"],partial:dt},{names:["socials"],partial:ct}],pt=`<%#
# paramètres footer

* footer.id (string, optional): id du footer

* footer.top (object, optional) : Paramètres du bloc top (menu)

* footer.brand (object, optional) : Paramètres du bloc marque

* footer.content (object, optional) : Paramètres du bloc de contenu (texte + lien)

* footer.partners (object, optional) : Paramètres du bloc partenaire (logos)

* footer.bottom (object, optional) : Paramètres du bloc bottom (liens et copyright)

%>
<% eval(include('../../../../core/index.ejs')); %>
<% let footer = locals.footer || {brand: {}} %>

<footer class="<%= prefix %>-footer" role="contentinfo" <% if (footer.id !== undefined) { %>id="<%- footer.id %>"<% } %>>

  <% if (footer.top !== undefined) { %>
    <div class="<%= prefix %>-footer__top">
      <div class="<%= prefix %>-container" >
        <div class="<%= prefix %>-grid-row <%= prefix %>-grid-row--start <%= prefix %>-grid-row--gutters" >
          <%- include('./footer-top', {top: footer.top}); %>
        </div>
      </div>
    </div>
  <% } %>

  <div class="<%= prefix %>-container" >

    <div class="<%= prefix %>-footer__body">
      <%- include('./footer-brand', {brand: footer.brand}); %>
      <%- include('./footer-content', {content: footer.content}); %>
    </div>

    <% if (footer.partners !== undefined) { %>
      <div class="<%= prefix %>-footer__partners">
          <%- include('./footer-partners', {partners: footer.partners}); %>
      </div>
    <% } %>

    <div class="<%= prefix %>-footer__bottom">
      <%- include('./footer-bottom', {bottom: footer.bottom}); %>
    </div>

  </div>

</footer>
`,mt=`<%#
# paramètres footer bottom

* bottom.copyright (string, required) : texte de copyright

* bottom.links (array, optional) : tableau de liens
  ** bottom.links[].markup (string, optional) : markup du lien
  ** bottom.links[].label (string, required) : Libellé du lien
  ** bottom.links[].classes (array, required) : classes supplémentaires du lien
  ** bottom.links[].attributes (array, required) : attributs supplémentaires du lien

%>
<% eval(include('../../../../core/index.ejs')); %>

<% let bottom = locals.bottom || {} %>
<% let links = bottom.links || [] %>
<ul class="<%= prefix %>-footer__bottom-list">
  <%
    for (let i = 0; i < links.length; i++) {
  %>
    <li class="<%= prefix %>-footer__bottom-item">
      <%
      const link = links[i];

      switch (link.template) {
        case 'display':
          %><%- include('../../../button/template/ejs/button-display', { button: link }); %><%
          break;

        case 'button':
        %><%- include('../../../button/template/ejs/button', { button: link }); %><%
        break;

        default:
          const classes = link.classes || [];
          const markup = link.markup || 'a';
          const attributes = link.attributes || {};
          attributes.id = uniqueId('footer__bottom-link');
          if (markup === 'a') attributes["href"] = link.href || '#';
          classes.push(\`\${prefix}-footer__bottom-link\`);
          %>
          <%- include('../../../../core/template/ejs/action/action.ejs', {action: {...link, attributes: attributes, classes: classes, markup: markup}}); %>
          <%
      } %>
    </li>
  <% } %>
</ul>
<div class="<%= prefix %>-footer__bottom-copy">
  <p><%- bottom.copyright %></p>
</div>
`,bt=`<%#
# paramètres footer top

* top.categories (object, required) : Paramètre de catégories
  ** top.categories[].label (string, required) : Libellé de la catégorie du menu
  ** top.categories[].link (object, optional) : Lien de la catégorie du menu
    *** top.categories[].link.href (string, required) : URL de la catégorie du menu
    *** top.categories[].link.classes (array, optional) : Classes supplémentaires du lien
    *** top.categories[].link.attributes (object, optional) : Attributs supplémentaires du lien
  ** top.categories[].links (string, required) : tableau de liens
    *** top.categories[].links[].label (string, required) : Libellé du lien
    *** top.categories[].links[].href (string, required) : Lien du menu

%>
<% eval(include('../../../../core/index.ejs')); %>

<% const top = locals.top || {} %>

<%
  for (category of top.categories) {
%>
<div class="<%= prefix%>-col-12 <%= prefix%>-col-sm-3 <%= prefix%>-col-md-2">
  <h3 class="<%= prefix %>-footer__top-cat">
    <% if (category.link) { %>
      <%- include('../../../../core/template/ejs/action/action.ejs', {action: {...category.link, markup: 'a', label: category.label}}); %>
    <% } else { %>
      <%- category.label %>
    <% } %>
  </h3>
  <ul class="<%= prefix %>-footer__top-list">
  <%
    for (link of category.links) {
      const attributes = link.attributes || {};
      const classes = link.classes || [];
      classes.push(\`\${prefix}-footer__top-link\`);
      const markup = link.markup || 'a';
  %>
    <li>
      <%- include('../../../../core/template/ejs/action/action.ejs', {action: {...link, markup: markup, classes: classes, attributes: attributes}}); %>
    </li>
  <% } %>
  </ul>
</div>
<% } %>
`,gt=`<%#
# paramètres footer content

* content.desc (string, required) : Contenu text/html du bloc de contenu

* content.links (array, required) : Tableau de liens
  ** content.links[].label (string, required) : label du lien
	** content.links[].href (string, required) : url du lien

%>
<% eval(include('../../../../core/index.ejs')); %>

<% let content = locals.content || {} %>
<% let links = content.links || [] %>

<div class="<%= prefix %>-footer__content" >
	<p class="<%= prefix %>-footer__content-desc"><%- content.desc %></p>
	<ul class="<%= prefix %>-footer__content-list">
		<%
			for (link of links) {
				const attributes = link.attributes || {};
				const classes = link.classes || [];
				classes.push(\`\${prefix}-footer__content-link\`);
      	attributes.id = attributes.id || uniqueId('footer__content-link');
		%>
		<li class="<%= prefix %>-footer__content-item">
			<%- include('../../../../core/template/ejs/action/action.ejs', {action: {...link, classes: classes, attributes: attributes, markup: 'a'}}); %>
		</li>
		<% } %>
	</ul>
</div>
`,ft=`<%#
# paramètres footer brand

* brand.logo (object, optional) : Paramètres du logo bloc marque - voir composant logo src/component/logo/template/ejs/logo.ejs

* brand.operator (object, optional) : Paramètres du logo opérateur - voir src/core/template/ejs/media/img.ejs

* brand.link (object, optional) : Paramètre du lien du logo
  ** brand.link.id (object, optional) : id du lien
	** brand.link.href (object, optional) : href du lien
	** brand.link.title (object, optional) : attribut title du lien
	** brand.link.position (object, optional) : position du lien (null|operator)

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let brand = locals.brand || {};
let link = brand.link || brandData('footer', brand.logo !== undefined, false, brand.operator !== undefined);
const linkAttributes = link.attributes || {};
linkAttributes.id = link.id || uniqueId('footer-brand-link');
linkAttributes.title = link.title || undefined;
linkAttributes.href = link.href || '/';
%>

<div class="<%= prefix %>-footer__brand <%= prefix %>-enlarge-link" >
	<% if (link.position !== 'operator') { %>
		<a <%- includeAttrs(linkAttributes) %>>
	<% } %>
			<%- include( '../../../logo/template/ejs/logo', {logo: brand.logo}); %>
	<% if (link.position !== 'operator') { %>
		</a>
	<% } else { %>
		<a <%- includeAttrs(linkAttributes) %> class="<%= prefix %>-footer__brand-link">
			<%- include('../../../../core/template/ejs/media/img.ejs', {media: { ...brand.operator, classes: [prefix + '-footer__logo']}}); %>
		</a>
	<% } %>
</div>

`,ht=`<%#
# paramètres footer partners

* partners (object, required) : Paramètres du template
  ** partners.title (string, required) : Titre du bloc partenaire
  ** partners.mainPartner (object, required) : Paramètre de l'image du partenaire principal - voir src/core/template/ejs/media/img.ejs
    *** partners.mainPartner.href (string, required) : Lien du partenaire principal
    *** partners.mainPartner.src (object, optional) : Chemin vers l'image du partenaire principal
    *** partners.mainPartner.alt (string, optional) : Texte alternatif de l'image du partenaire principal
  ** partners.subPartners (array, required) : Tableau de paramètre des images des partenaires secondaires - voir src/core/template/ejs/media/img.ejs

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
  let partners = locals.partners || {}
  const attributes = partners.attributes || {};
%>

<h2 class="<%= prefix %>-footer__partners-title"><%- partners.title %></h2>
<div class="<%= prefix %>-footer__partners-logos">
  <% if (partners.mainPartner) { %>
    <div class="<%= prefix %>-footer__partners-main">
      <a <%- includeAttrs(attributes) %> class="<%= prefix %>-footer__partners-link" href="<%- partners.mainPartner.href %>">
        <%- include('../../../../core/template/ejs/media/img.ejs',  {media: {...partners.mainPartner, classes: [prefix + '-footer__logo']}}); %>
      </a>
    </div>
  <% } %>

  <% if (partners.subPartners && partners.subPartners.length) { %>
    <div class="<%= prefix %>-footer__partners-sub">
      <ul>
        <%
          for (subPartner of partners.subPartners) {
            const attributes = subPartner.attributes || {};
        %>
          <li>
            <a <%- includeAttrs(attributes) %> class="<%= prefix %>-footer__partners-link" href="<%- subPartner.href %>">
              <%- include('../../../../core/template/ejs/media/img.ejs', {media: {...subPartner, classes: [prefix + '-footer__logo']}}); %>
            </a>
          </li>
        <% } %>
      </ul>
    </div>
  <% } %>
</div>
`,vt=[{names:["footer"],partial:pt},{names:["footer-bottom"],partial:mt},{names:["footer-top"],partial:bt},{names:["footer-content"],partial:gt},{names:["footer-brand"],partial:ft},{names:["footer-partners"],partial:ht}],xt=`<%#
# paramètres fieldset label

* label.label (string, required) : texte du label

* label.id (string, required) : id de l'input référencé

* label.hint (string, required) : texte additionel dans le label

* label.classes (array, optional) : Classes supplémentaires sur le label

* label.attributes (object, optional) : Attributs supplémentaires sur le label

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const label = locals.label;
const classes = [...label.classes || [], \`\${prefix}-label\`];
const attributes = { ...label.attributes, 'for': label.for };
%>

<label <%- includeClasses(classes); %> <%- includeAttrs(attributes); %>>
  <%- label.label %>
  <% if (label.hint) { %>
    <% if (Array.isArray(label.hint)) {
      for (let i = 0; i < label.hint.length; i++) {
        %>
        <%- include('./hint', { hint: { text: label.hint[i] } });%>
        <%
      }
    } else {
    %>
      <%- include('./hint', { hint: { text: label.hint } });%>
    <% } %>
  <% } %>
</label>
`,kt=`<%#
# paramètres hint

* hint.text (string, required) : texte additionel

* hint.id (string, optional) : id du hint

* hint.attributes (object, optional) : attributs spécifiques à rajouter sur le hint

* hint.classes (array, optional) : classes spécifiques à rajouter sur le hint

%>
<% eval(include('../../../../core/index.ejs')); %>
<%
  const hint = locals.hint || {};
  const classes = [...hint.classes || [], \`\${prefix}-hint-text\`];
  const attributes = { ...hint.attributes, id: hint.id };
  const markup = hint.markup || 'span';
%>
<<%= markup%> class="<%= prefix %>-hint-text"><%= hint.text %></<%= markup%>>
`,yt=`<%#
# paramètres fieldset

* fieldset.id (string, required) : id du fieldset

* fieldset.choice (boolean, optional) : si true, la graisse du label devient normal

* fieldset.grid (boolean, optional) : (default: false) Ajoute une grid-row autour des éléments

* fieldset.elements (array, optional) : tableau d'éléments control (voir control)

* fieldset.disabled (boolean, optional): attribut disabled du composant

* fieldset.legend (string, optional) : légende du composant

* fieldset.hint (string, optional) : message de description additionel

* fieldset.error (string, optional) : message d'erreur

* fieldset.valid (string, optional) : message de succès

* fieldset.massages (array, optional) : array de messages

* fieldset.includeEmptyMessagesGroup (boolean, optional) : true par défaut

* fieldset.attributes (object, optional) : attributs spécifiques à rajouter sur le fieldset

* fieldset.classes (array, optional) : classes spécifiques à rajouter sur le fieldset

%>
<% eval(include('../../../../../core/index.ejs')); %>
<% eval(include('../message/builder.js.ejs')); %>

<%
const fieldset = locals.fieldset || {};
const classes = fieldset.classes || [];
classes.push(\`\${prefix}-fieldset\`);
const attributes = { ...fieldset.attributes, id: fieldset.id };
let legend;
const labelledBy = [];
const messages = [];
const ids = {
  legend: \`\${fieldset.id}-legend\`,
  hint: \`\${fieldset.id}-hint\`
};

if (fieldset.legend || fieldset.hint) {
  let hint;

  if (fieldset.hint) {
    hint = {
      text: fieldset.hint,
      id: ids.hint
    };
  }

  const legendClasses = [];
  if (fieldset.choice) legendClasses.push(\`\${prefix}-fieldset__legend--regular\`);

  legend = {
    id: ids.legend,
    hint: hint,
    classes: legendClasses
  };

  switch (typeof fieldset.legend) {
    case 'string':
      legend.label = fieldset.legend;
      break;

    case 'object':
      legend = { ...legend, ...fieldset.legend };
      break;
  }
}
%>
<% fieldset.includeEmptyMessagesGroup %>
<%
const builder = new MessageBuilder(fieldset.id, fieldset.includeEmptyMessagesGroup);

if (fieldset.error) {
  classes.push(\`\${prefix}-fieldset--error\`);
  attributes.role = 'group';
  builder.addError(fieldset.error);
}
if (fieldset.valid) {
  classes.push(\`\${prefix}-fieldset--valid\`);
  attributes.role = 'group';
  builder.addValid(fieldset.valid);
}

if (fieldset.messages) {
  fieldset.messages.forEach(message => builder.add(message.type, message.text, message.attributes));
}

if (builder.isIncluded) labelledBy.push(...builder.ids);

if (fieldset.disabled === true) attributes.disabled = '';

if (labelledBy.length) {
  if (legend) labelledBy.unshift(ids.legend);
  attributes['aria-labelledby'] = labelledBy.join(' ');
}

const messagesGroup = builder.messagesGroup;
%>

<fieldset <%- includeClasses(classes); %> <%- includeAttrs(attributes); %>>
  <% if (legend) { %>
    <%- include('legend', { legend: legend }); %>
  <% } %>
  <% for (const element of fieldset.elements) { %>
    <%- include('fieldset-element', { element: element }); %>
  <% } %>
  <%- include('../message/messages-group', { messagesGroup: messagesGroup }); %>
</fieldset>
`,jt=`<%#
# paramètres element

* element.path (String, required): Chemin du template de l'élement

* element.data (object, required): Paramètres de l'élément

* element.inline (boolean, optional) : ajoute le modifier inline sur l'élement

* element.inlineMin (boolean, optional) : ajoute le modifier inline-min sur l'élement

* element.modifier (String, optional) : nom du modifieur de element, ex: 'postal' ou 'number'

* element.breakAfter (boolean, optional) : ajoute un hr pour forcer le retour à la ligne

* element.attributes (object, optional) : attributs spécifiques à rajouter sur le element

* element.classes (array, optional) : classes spécifiques à rajouter sur le element

%>

<% eval(include('../../../../../core/index.ejs')); %>

<%
let element = locals.element || {};
const elementClass = \`\${locals.prefix}-fieldset__element\`;
const elementClasses = element.classes || [];
elementClasses.push(elementClass);
const elementAttrs = element.attributes || {};
switch (element.inline) {
  case 'md':
    elementClasses.push(\`\${elementClass}--inline@md\`);
    break;

  case true:
    elementClasses.push(\`\${elementClass}--inline\`);
    break;
}
if (element.grow) elementClasses.push(\`\${elementClass}--inline-grow\`);
if (element.modifier) elementClasses.push(\`\${elementClass}--\${element.modifier}\`);

let path, data;

switch (element.type) {
  case 'input':
    path = '../../../../input/template/ejs/input-group';
    data = { input: element.data };
    break;

  case 'email':
    path = '../../../../../layout/pattern/email/template/ejs/email';
    data = { input: element.data };
    break;

  case 'tel':
    path = '../../../../../layout/pattern/tel/template/ejs/tel';
    data = { input: element.data };
    break;

  case 'select':
    path = '../../../../select/template/ejs/select-group';
    data = { select: element.data };
    break;

  case 'checkbox':
    path = '../../../../checkbox/template/ejs/checkbox-group';
    data = { checkbox: element.data };
    break;

  case 'radio':
    path = '../../../../radio/template/ejs/radio-group';
    data = { radio: element.data };
    break;

  case 'toggle':
    path = '../../../../toggle/template/ejs/toggle-group';
    data = { toggle: element.data };
    break;

  case 'password':
    path = '../../../../password/template/ejs/password';
    data = { password: element.data };
    break;

  case 'fieldset':
    path = './fieldset';
    data = { fieldset: element.data };
    break;

  case 'hint':
    path = '../hint';
    data = { hint: element.data };
    break;

  case 'button':
    path = '../../../../button/template/ejs/button';
    data = { button: element.data };
    break;

  case 'buttonsGroup':
    path = '../../../../button/template/ejs/buttons-group';
    data = { buttonsGroup: element.data };
    break;

  case 'link':
    path = '../../../../link/template/ejs/link';
    data = { link: element.data };
    break;

  case 'paragraph':
    path = '../../../../../core/template/ejs/typography/paragraph';
    data = { paragraph: element.data };
    break;

  case 'alert':
    path = '../../../../alert/template/ejs/alert';
    data = { alert: element.data };
    break;

  case 'upload':
    path = '../../../../upload/template/ejs/upload';
    data = { upload: element.data };
    break;

}
%>

<div <%- includeClasses(elementClasses); %> <%- includeAttrs(elementAttrs); %>>
  <%- include(path, data); %>
</div>

<% if (element.breakAfter) { %>
  <hr class="<%= prefix %>-hr--break-line">
<% } %>
`,wt=`<%#
# paramètres fieldset legend

* legend.id (string, required) : id du fieldset

* legend.attributes (object, optional) : attributs spécifiques à rajouter sur la legend

* legend.classes (array, optional) : classes spécifiques à rajouter sur la legend

%>
<% eval(include('../../../../../core/index.ejs')); %>
<%
const legend = locals.legend || {};
const classes = legend.classes || [];
classes.push(legend.sr ? \`\${prefix}-sr-only\`: \`\${prefix}-fieldset__legend\`);
const attributes = { ...legend.attributes, id: legend.id };
%>
<legend <%- includeClasses(classes); %> <%- includeAttrs(attributes); %>>
    <%- legend.label %>
    <% if (legend.hint) { %>
    <%- include('../hint', { hint: legend.hint });%>
    <% } %>
</legend>
`,Ct=`<%#
# paramètres form

* form.id (string, required) : id du fieldset

* form.items (array, optional) : tableau d'élément de control

* form.label (array, optional) : Texte du aria-label du fieldset (required si pas de légende)

* form.legend (string, optional) : légende du composant

* form.hint (string, optional) : message de description additionel

* form.error (string, optional) : message d'erreur

* form.valid (string, optional) : message de succès

* form.attributes (object, optional) : attributs spécifiques à rajouter sur le form

* form.classes (array, optional) : classes spécifiques à rajouter sur le form
%>

<% eval(include('../../../../core/index.ejs')); %>

 <%
 const form = locals.form || {};
 const classes = form.classes || [];
 const attributes = form.attributes || {}
 attributes.id = form.id;

 const fieldset = {...form, attributes: {}, id: \`\${form.id}-fieldset\`};
 if (!form.legend) fieldset.attributes['aria-label'] = form.label;
 %>

<% if (form.elements && form.elements.length) { %>
  <form <%- includeClasses(classes) %> <%- includeAttrs(attributes) %>>
    <%- include('fieldset/fieldset', { fieldset: fieldset }); %>
  </form>
<% } %>
`,_t=`<%#
# paramètres messagesGroup

* messagesGroup.id (string, otpional) : id de l'élément référencé

* messagesGroup.messages (array, optional): Array de messages

* messagesGroup.attributes (object, optional) : attributs spécifiques à rajouter sur le message

* messagesGroup.classes (array, optional) : classes spécifiques à rajouter sur le message

%>
<% eval(include('../../../../../core/index.ejs')); %>
<%
const messagesGroup = locals.messagesGroup || {};
const classes = [...messagesGroup.classes || [], \`\${prefix}-messages-group\`];
const attributes = { ...messagesGroup.attributes, id: messagesGroup.id, 'aria-live': 'polite' };
const messages = messagesGroup.messages || [];
%>

<% if (messages.length > 0 || messagesGroup.includeEmpty) { %>
<div <%- includeClasses(classes) %> <%- includeAttrs(attributes) %> >
    <% for (const message of messages) { %>
        <%- include('./message', { message: message })%>
    <% } %>
</div>
<% } %>
`,At=`<%#
# paramètres message

* message.id (string, required) : id de l'élément référencé

* message.type (string, optional): type du message d'erreur

* message.text (string, optional): contenu du message

* message.attributes (object, optional) : attributs spécifiques à rajouter sur le message

* message.classes (array, optional) : classes spécifiques à rajouter sur le message

%>
<% eval(include('../../../../../core/index.ejs')); %>
<%
const message = locals.message || {};
const classes = [...message.classes || [], \`\${prefix}-message\`];
const attributes = { ...message.attributes, id: message.id };
switch (message.type) {
  case 'error':
    classes.push(\`\${prefix}-message--error\`);
    break;

  case 'valid':
    classes.push(\`\${prefix}-message--valid\`);
    break;

  case 'info':
    classes.push(\`\${prefix}-message--info\`);
    break;

  case 'warning':
    classes.push(\`\${prefix}-message--warning\`);
    break;
}
%>
<p <%- includeClasses(classes) %> <%- includeAttrs(attributes) %>><%- message.text %></p>
`,qt=[{names:["label"],partial:xt},{names:["hint"],partial:kt},{names:["fieldset"],partial:yt},{names:["fieldset-element"],partial:jt},{names:["legend"],partial:wt},{names:["messages-group"],partial:_t},{names:["message"],partial:At},{names:["form"],partial:Ct}],It=`<%#
# paramètres header

* header (object, required) : Paramètres du template
  ** header.id (String, required) : attribut id du header
  ** header.body (object, required) : Paramètres du template body
  ** header.menu (object, optional) : Paramètres du template menu

Exemple complet :

header = {
  id: '',
  body: {
    brand: {
      logo: { voir logo },
      operator: {
        src: 'url de l'img',
        alt: 'texte alternatif',
        style: ''
      },
      service: {
        title: '',
        tagline: ''
      },
    },
    tools: {
      links: {
        items: [
          { voir buttonsGroup dans button }
        ]
      },
      translate: { voir translate }
      search: {
        id: '',
        modalId: '',
        btnId: '',
        sample: '',
      }
    },
  }
  menu: {
    id: '', // id du bouton du menu
    modalId: '', // id de la modale de menu
    navigation: {
      id: '', // id de la navigation
      + voir composant navigation
    },
    tools: {
      links: [],
      duplicateLinks: false
    }
  }
}
%>
<% eval(include('../../../../core/index.ejs')); %>
<% let header = locals.header || {body:{}, menu: {}};
const attributes = header.attributes || {};
if (header.id) attributes.id = header.id;
if (header.body.tools && header.menu.tools.duplicateLinks) {
  if (header.body.tools && header.body.tools.links) header.menu.tools.links = header.body.tools.links;
  if (header.body.tools && header.body.tools.translate) header.menu.tools.translate = header.body.tools.translate;
  if (header.body.tools && header.body.tools.toolsContent) header.menu.tools.toolsContent = header.body.tools.toolsContent;
}
if (header.menu && header.menu.modalId && header.menu.id) {
  header.body.brand.navbar.menu = header.menu;
}
if (header.body.tools && header.body.tools.search && header.body.tools.search.modalId && header.body.tools.search.id) {
  header.body.brand.navbar.search = header.body.tools.search;
}
if (header.menu && header.menu.navigation && header.menu.modalId) {
  header.menu.navigation.modalId = header.menu.modalId;
}
%>

<header role="banner" class="<%= prefix %>-header" <%- includeAttrs(attributes) %>>
  <%- include('./header-body', {body: header.body});%>
  <% if ((header.menu && header.menu.navigation && header.body.brand.navbar) || (header.body.tools && header.body.tools.links)) { %>
    <%- include('./header-menu', {menu: header.menu});%>
  <% } %>
</header>
`,Pt=`<%#
# paramètres header body

* body (object, required) : Paramètres du template
  ** body.brand (object, required) : Paramètres du template brand
  ** tools.tools (object, optional) : Paramètres du template tools (search, links)

%>
<% eval(include('../../../../core/index.ejs')); %>

<% let body = locals.body || {}; %>

<div class="<%= prefix %>-header__body">
  <div class="<%= prefix %>-container" >
    <div class="<%= prefix %>-header__body-row">
      <%- include('./header-brand', {brand: body.brand}); %>

      <% if (body.tools) { %>
        <%- include('./header-tools', {tools: body.tools, navbar: body.brand.navbar}); %>
      <% } %>
    </div>
  </div>
</div>
`,Lt=`<%#
# paramètres header brand

* brand (object, required) : Paramètres du template
  ** brand.service (object, optional) : Paramètres des services
    *** brand.service.title (String, required) : titre du service
    *** brand.service.tagline (String, optional) : description du service - précisions sur l‘organisation
  ** brand.logo (string, optional) : chemin du template logo, ou paramètres du logo bloc marque - voir composant logo src/component/logo/template/ejs/logo.ejs
  ** brand.operator (object, optional) : Paramètres logo opérateur - voir src/core/template/ejs/media/img.ejs
  ** brand.navbar (object, optional) : Paramètres de la navbar - voir navbar
  ** brand.link (object, optional) : Paramètres du lien
    *** brand.link.title (string, required) : Titre du lien "Accueil - nom service - nom entité"
    *** brand.link.href (string, optional) : Href du lien, généralement "/" pour retourner à la racine du site
    *** brand.link.position (string, optional) : Elément sur lequel positionner le lien ('logo', 'service', ou 'operator')

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let brand = locals.brand || {};
%>
<div class="<%= prefix %>-header__brand <%= prefix %>-enlarge-link">
  <%
  const linkInfos = brand.link || brandData('header', header.logo !== undefined, brand.service !== undefined && brand.service.title !== undefined, brand.operator !== undefined);

  const link = \`<a href="\${linkInfos.href}" title="\${linkInfos.title}" >\`;
  %>

  <div class="<%= prefix %>-header__brand-top" >
    <div class="<%= prefix %>-header__logo" >
      <% if (linkInfos.position === 'logo') { %><%- link %><% } %>
        <%
          let path, data;
          switch(typeof brand.logo) {
            case 'string':
              path = brand.logo;
              break;

            default :
              path = '../../../logo/template/ejs/logo';
              data = brand.logo;
              break;
          }
        %>
        <%- include(path, {logo: data}); %>
      <% if (linkInfos.position === 'logo') { %><%- '</a>' %><% } %>
    </div>


    <% if (brand.operator !== undefined) { %>
      <div class="<%= prefix %>-header__operator">
        <% if (linkInfos.position === 'operator') { %><%- link %><% } %>
        <%- include('../../../../core/template/ejs/media/responsive-img.ejs', {media: brand.operator}); %>
        <% if (linkInfos.position === 'operator') { %><%- '</a>' %><% } %>
      </div>
    <% } %>

    <% if (brand.navbar) { %>
      <%- include('./header-navbar', {navbar: brand.navbar}); %>
    <% } %>
  </div>

  <% if (brand.service !== undefined) { %>
    <div class="<%= prefix %>-header__service" >
      <% if (linkInfos.position === 'service') { %><%- link %><% } %>
        <% if (brand.service && (brand.service.title || brand.service.beta)) { %>
          <p class="<%= prefix %>-header__service-title">
            <% if (brand.service.title) { %>
              <%- brand.service.title %>
            <% } %>
            <% if (brand.service.beta) { %>
              <%- include('../../../badge/template/ejs/badge.ejs', {badge: {markup: 'span', label: "BETA", size: 'sm', accent: 'green-emeraude'} }) %>
            <% } %>
          </p>
        <% } %>
      <% if (linkInfos.position === 'service') { %><%- '</a>' %><% } %>
      <% if (brand.service && brand.service.tagline !== undefined) { %>
        <p class="<%= prefix %>-header__service-tagline"><%- brand.service.tagline %></p>
      <% } %>
    </div>
  <% } %>
</div>
`,$t=`<%#
# paramètres header menu

* menu (object, required) : Paramètres du template
  ** menu.navigation (object, optional) : Paramètres du menu de navigation
    *** menu.navigation.id (String, optional) : Id du bouton d'ouverture du menu
    *** menu.navigation.modalId (String, optional) : Id de la modale du menu de navigation
  ** menu.tools (object, optional) : Paramètres des tools (raccourcis)
    *** menu.tools.links (object, optional) : Paramètres des tools (raccourcis)
    *** menu.tools.duplicateLinks (boolean, optional) : Si true, duplique le bloc de liens raccourcis dans le menu mobile (pour vue/angular/react)
    *** menu.tools.translate (object, optional) : Paramètres du sélecteur de langue - voir translate
    *** menu.tools.toolsContent (string, optional) : Permet d'ajouter du contenu custom dans le bloc tools
    %>

<% eval(include('../../../../core/index.ejs')); %>

<%
let menu = locals.menu || {};
if (!menu.id || !menu.modalId) throw new Error('menu.navigation is not correctly defined in header. modalId required');
%>
<div class="<%= prefix %>-header__menu <%= prefix %>-modal" id="<%= menu.modalId %>" aria-labelledby="<%= menu.id %>">
  <div class="<%= prefix %>-container%>" >
    <%- include('../../../button/template/ejs/button-close', {button: { closeId: menu.modalId }}); %>
    <% if (menu.tools) { %>
      <div class="<%= prefix %>-header__menu-links">
        <% if (menu.tools  && (menu.tools.links || menu.tools.translate || menu.tools.toolsContent)) { %>
          <% if (menu.tools.links && menu.tools.links.buttons) { %>
            <% if (menu.tools.links.buttons.length > 1) { %>
              <ul class="<%= prefix %>-btns-group">
                <% for (let i = 0; i < menu.tools.links.buttons.length; i++) { %>
                  <li>
                    <%- include('../../../button/template/ejs/button', {button:menu.tools.links.buttons[i]}); %>
                  </li>
                <% } %>
              </ul>
            <% } else { %>
              <%- include('../../../button/template/ejs/button', {button:menu.tools.links.buttons[0]}); %>
            <% } %>
          <% } %>

          <% if (menu.tools.translate) { %>
            <%- include('../../../translate/template/ejs/translate.ejs', { translate: {...menu.tools.translate, collapseId: menu.tools.translate.collapseId + '-mobile', id: menu.tools.translate.id + '-mobile'} }); %>
          <% } %>

          <% if (menu.tools.toolsContent) { %>
            <%- menu.tools.toolsContent %>
          <% } %>
        <% } %>
      </div>
    <% } %>

    <% if (menu.navigation && menu.navigation.id) { %>
      <%- include( menu.navigation.sample !== undefined ? menu.navigation.sample : '../../../navigation/template/ejs/navigation', {navigation: menu.navigation} ); %>
    <% } %>
  </div>
</div>
`,Et=`<%#
# paramètres header navbar

* navbar (object, required) : Paramètres du template
  ** navbar.menu (object, optional) : Paramètres du menu (mobile)
    *** navbar.menu.id (String, required) : id du bouton menu
    *** navbar.menu.modalId (String, required) : id de la modale de menu
    *** navbar.menu.label (String, optional) : Libellé du bouton menu
  ** navbar.search (object, optional) : Paramètres de la barre de recherche (mobile)
    *** navbar.menu.id (String, optional) : id du bouton recherche
    *** navbar.menu.modalId (String, optional) : id de la modale de recherche
    *** navbar.menu.label (String, optional) : Libellé du bouton recherche
%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let navbar = locals.navbar || {};
let label;
%>
<div class="<%= prefix %>-header__navbar">
  <%
  const attrs = {};
  attrs[\`data-\${prefix}-opened\`] = false;

  if (navbar.search) {
      label = navbar.search.label || 'Rechercher';
  %>
    <%- include('../../../button/template/ejs/button', {button: {
        classes: [prefix + '-btn--search'],
        title: label,
        attributes: {
            ...attrs,
            'aria-controls': navbar.search.modalId,
        },
        label: label,
        id: navbar.search.btnId
    }}); %>
<% } %>

  <%
    if (navbar.menu) {
      label = navbar.menu.label || 'Menu';

  %>
  <%- include('../../../button/template/ejs/button', {button: {
      classes: [prefix + '-btn--menu'],
      title: label,
      attributes: {
          ...attrs,
          'aria-controls': navbar.menu.modalId
      },
      label: label,
      id: navbar.menu.id
  }}); %>
  <% } %>
</div>
`,Tt=`<%#
# paramètres header tools

* tools (object, required) : Paramètres du template
  ** tools.links (object, optional) : Paramètres des liens d'accès direct - voir links
  ** tools.translate (object, optional) : Paramètres du sélecteur de langue - voir translate
  ** tools.toolsContent (string, optional) : Permet d'ajouter du contenu custom dans le bloc tools
  ** tools.search (object, optional) : Paramètres du bloc de recherche (voir compoosant search)
    *** tools.search.id (string, required) : Id du champ de recherche
    *** tools.search.modalId (string, required) : Id de la modale de recherche (mobile)
    *** tools.search.placeholder (string, required) : placeholder du champ de recherche
    *** tools.search.sample (string, optional) : chemin vers le template de search (si différent)
%>
<% eval(include('../../../../core/index.ejs')); %>

<% let tools = locals.tools || {}; %>

<div class="<%= prefix %>-header__tools">
  <% if (tools.links !== undefined || tools.translate !== undefined) { %>
    <div class="<%= prefix %>-header__tools-links">
      <% if (tools.links.buttons) { %>
        <% if (tools.links.buttons.length > 1) { %>
          <ul class="<%= prefix %>-btns-group">
            <% for (let i = 0; i < tools.links.buttons.length; i++) { %>
              <li>
                <%- include('../../../button/template/ejs/button', {button:tools.links.buttons[i]}); %>
              </li>
            <% } %>
          </ul>
        <% } else { %>
          <%- include('../../../button/template/ejs/button', {button:tools.links.buttons[0]}); %>
        <% } %>
      <% } %>
      <% if (tools.translate !== undefined) { %>
        <%- include('../../../translate/template/ejs/translate.ejs', { translate: tools.translate }); %>
      <% } %>
      <% if (tools.toolsContent !== undefined) { %>
        <%- tools.toolsContent %>
      <% } %>
    </div>
  <% } %>

  <% if (tools.search !== undefined) {
      if (!tools.search.id || !tools.search.modalId) throw new Error('tools.search is not defined in header. id & modalId required');
  %>
    <div class="<%= prefix %>-header__search <%= prefix %>-modal" id="<%= tools.search.modalId %>" aria-labelledby="<%= navbar.search.btnId %>">
      <div class="<%= prefix %>-container <%= prefix %>-container-lg--fluid" >
        <%- include('../../../button/template/ejs/button-close', {button: { closeId: tools.search.modalId }}); %>
        <%- include( tools.search.sample !== undefined ? tools.search.sample : '../../../search/template/ejs/search', {search: tools.search}); %>
      </div>
    </div>

  <% } %>
</div>
`,St=[{names:["header-body"],partial:Pt},{names:["header-brand"],partial:Lt},{names:["header-menu"],partial:$t},{names:["header-navbar"],partial:Et},{names:["header-tools"],partial:Tt},{names:["header"],partial:It}],Gt=`<%#
# paramètres highlight

* highlight.text (string, required) : contenu texte

* highlight.id (string, optional) : id du highlight

* highlight.size (string, optional) : Taille du texte

* highlight.classes (array, optional) : Classes supplémentaires sur le highlight

* highlight.accent (string, optional): Couleur d'accenturation du composant

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let highlight = locals.highlight || {};
let classes = highlight.classes || [];
let attributes = highlight.attributes || {};

if (highlight.accent !== undefined) classes.push(prefix + '-highlight--' + highlight.accent);
if (highlight.id !== undefined) attributes.id = highlight.id;

classes.push(prefix + '-highlight');
%>

<div <%- includeClasses(classes)%> <%- includeAttrs(attributes)%>>
  <%- include('../../../../core/template/ejs/typography/paragraph', {paragraph: {content: highlight.text, size: highlight.size}}) %>
</div>
`,Mt=[{names:["highlight"],partial:Gt}],Dt=`<%#
# paramètres input group

* input.valid (string, optional) : message de validation

* input.error (string, optional) : message d'erreur

* input.disabled (boolean, optional) : champ désactivé

* input.groupId (string, optional) : id du groupe

* input.groupAttributes (object, optional) : attributs supplémentaires sur le groupe

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const input = locals.input || {};
let groupClasses = [prefix + '-input-group'];
const groupAttributes = input.groupAttributes || {};
groupAttributes.id = input.groupId || uniqueId('input-group');

if (input.error) groupClasses.push(prefix + '-input-group--error');
if (input.disabled) groupClasses.push(prefix + '-input-group--disabled');
if (input.valid) groupClasses.push(prefix + '-input-group--valid');
%>

<div <%- includeClasses(groupClasses); %> <%- includeAttrs(groupAttributes); %>>
  <%- include('./input', {input: input}); %>
</div>
`,zt=`<%#
# paramètres input

* input.id (string, required) : id du label et de l'input, sert également à construire les ids des messages valid, error et hint

* input.label (string, required) : intitulé du label

* input.type (string, required) : type de l'input. si textarea, l'input est remplacé par un textarea

* input.name (string, optional) : attribut name de l'input

* input.value (string, optional) : attribut value de l'input

* input.autocomplete (string, optional) : attribut autocomplete  de l'input

* input.describedby (array, optional) : Tableau d'id d'éléments à lier avec un aria-describedby

* input.placeholder (string, optional) : text du placeholder de l'input

* input.icon (string, optional) : nom de l'icone qui sera placée sur la partie droite de l'input

* input.valid (string, optional) : message de validation

* input.error (string, optional) : message d'erreur

* input.messages (array, optional) : array de messages

* input.hint (string, optional) : message d'aide

* input.required (boolean, optional)

* input.disabled (boolean, optional)

* input.includeEmptyMessagesGroup (boolean, optional) : true par défaut

* input.addon (boolean, optional) : Si true, input complexe composé d'un addon (ex: pour associer un bouton)

* input.button (object, optional) : attributs du bouton collé à l'input (si addon true)

* input spellcheck (boolean, optional) : ajout de l'attribut spellcheck si définit avec la valeur définie

* input.attributes (object, optional) : attributs spécifiques à rajouter sur l'input

* input.classes (array, optional) : classes spécifiques à rajouter sur l'input

* input.labelClasses (Array, optional) : classes spécifiques à rajouter sur le label

* input.labelAttrs (Object, optional) :  attributs spécifiques à rajouter sur le label

%>
<% eval(include('../../../../core/index.ejs')); %>
<% eval(include('../../../form/template/ejs/message/builder.js.ejs')); %>

<%
const input = locals.input || {};
const classes = input.classes || [];
const attributes = input.attributes || {};
const inputType = input.type || 'text';
const describedby = input.describedby || [];
const label = {
  label: input.label,
  for: input.id,
  classes: input.labelClasses,
  attributes: input.labelAttributes,
}

classes.push(\`\${prefix}-input\`);

const builder = new MessageBuilder(input.id, input.includeEmptyMessagesGroup);

if (input.valid) {
  builder.addValid(input.valid);
}
if (input.error) {
  builder.addError(input.error);
}

if (input.messages) {
  input.messages.forEach(message => builder.add(message.type, message.text, message.attributes));
}

if (builder.isIncluded) describedby.push(...builder.ids);

if (input.hint) {
  label.hint = input.hint;
}

if (describedby.length > 0) attributes['aria-describedby'] = describedby.join(' ');

if (input.required === true) attributes['aria-required'] = true;
if (input.disabled === true) attributes['disabled'] = '';

if (input.placeholder) attributes['placeholder'] = input.placeholder;
if (input.name) attributes.name = input.name;
if (input.value) attributes.value = input.value;
if (input.autocomplete) attributes.autocomplete = input.autocomplete;
attributes.id = input.id;
if (input.spellcheck === true || input.spellcheck === false) attributes.spellcheck = \`\${input.spellcheck}\`;

const inputWrapClass = [];
if (input.button || input.icon) inputWrapClass.push(\`\${prefix}-input-wrap\`);
if (input.icon && typeof(input.icon) === 'string') inputWrapClass.push(\`\${prefix}-icon-\${input.icon}\`);
if (input.addon) inputWrapClass.push(\`\${prefix}-input-wrap--addon\`);
if (input.action) inputWrapClass.push(\`\${locals.prefix}-input-wrap--action\`);
%>

<%- include('../../../form/template/ejs/label', { label: label }); %>

<% if (input.icon || input.button) { %>
<div <%- includeClasses(inputWrapClass); %>>
<% } %>

  <% if (input.type === 'textarea') { %>
  <textarea <%- includeClasses(classes); %> <%- includeAttrs(attributes); %>></textarea>
  <% }
  else {%>
  <input <%- includeClasses(classes); %> <%- includeAttrs(attributes); %> type="<%= inputType %>">
  <% } %>

  <% if (input.button) { %>
  <%- include('../../../button/template/ejs/button', { button:input.button }); %>
  <% } %>

<% if (input.icon || input.button) { %>
</div>
<% } %>

<%- include('../../../form/template/ejs/message/messages-group', { messagesGroup: builder.messagesGroup }); %>

`,Bt=[{names:["input-group"],partial:Dt},{names:["input"],partial:zt}],Ft=`<%#
# paramètres link

* link.label (string, required) : contenu texte

* link.markup (string, optional) : balise de l'actionneur du composant (a, button)

* link.href (string, required) : adresse url du lien

* link.detail (string, optional) : detail du lien de telechargement

* link.blank (bool, optional) : si true, target prend la valeur _blank, sinon _self

* link.disabled (boolean, optional) : si valeur true, link désactivé

* link.size (string, optional) : taille du lien
  valeurs :
  * sm
  * lg

* link.icon (string, optional) : icon du lien

* link.download (boolean, optional): Si true, lien de téléchargement

* link.iconPlace (string, optional) : emplacement de l'icone
  si non défini alors que le paramètre icon est défini, bouton avec icone seule, sans libellé
  valeurs :
  * left : icone à gauche du libellé
  * right : icone à droite du libellé

* link.id (string, optional) : id du lien

* link.attributes (object, optional) : attributs spécifiques à rajouter sur le composant

* link.classes (array, optional) : classes spécifiques à rajouter sur le composant

* link.assess (bool | string, optional) : si true, ajoute l'attribut permettant le remplissage automatique des informations du fichier à télécharger. Si string, ajoute l'attribut avec la valeur de la string (ex: "bytes" pour les poids en bytes)

* link.hreflang (string, optional) : code langue du fichier à télécharger

%>
<% eval(include('../../../../core/index.ejs')); %>
<%
const link = locals.link || {};
const linkClasses = link.classes || [];
const linkAttrs = link.attributes || {};
let label = link.label || 'lorem ipsum';
const disabled = link.disabled === true;
linkAttrs.id = link.id || uniqueId('link');
linkClasses.push(prefix + '-link');
const markup = link.markup || 'a';

switch (markup) {
  case 'a':
    if (link.rel) linkAttrs.rel = link.rel;
    if (link.hreflang) linkAttrs.hreflang = link.hreflang;
    if (link.assess === true) {
      linkAttrs[\`data-\${prefix}-assess-file\`] = ''
    } else if (typeof(link.assess) === 'string') {
      linkAttrs[\`data-\${prefix}-assess-file\`] = link.assess
    }
    break;
}

switch (link.size) {
  case 'sm':
    linkClasses.push(prefix + '-link--sm');
    break;

  case 'lg':
    linkClasses.push(prefix + '-link--lg');
    break;
}

if (link.download) {
  linkAttrs.download = link.download;
  linkClasses.push(prefix + '-link--download');
}

if (link.icon !== undefined) linkClasses.push(\`\${prefix}-icon-\${link.icon}\`);

if (link.iconPlace !== undefined) {
  switch (link.iconPlace) {
    case 'left':
      linkClasses.push(\`\${prefix}-link--icon-left\`);
      break;

    case 'right':
      linkClasses.push(\`\${prefix}-link--icon-right\`);
      break;
  }
}

if (link.detail) {
  label += \` <span class="\${prefix}-link__detail">\${link.detail}</span>\`;
}

%>

<%- include('../../../../core/template/ejs/action/action', {action: {...link, classes: linkClasses, attributes: linkAttrs, markup: markup, label: label, disabled: disabled}}) %>
`,Nt=`<%#
# paramètres groupe de links

* linksGroup.links (array, required): paramètres spécifique de chaque link du groupe

* linksGroup.size (string, optional) : définie la taille des links dans le groupe (default md)
  * lg : Badge taille lg
  * sm : Badge taille sm

* linksGroup.classes (array, optionnal) : Classes suplémentaires sur le groupe de links

* linksGroup.attributes (object, optionnal) : Attributs suplémentaires sur le groupe de links

#%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const linksGroup = locals.linksGroup || {};
let groupClasses = linksGroup.classes || [];
let groupAttrs = linksGroup.attributes || {};
let links = linksGroup.links || [];
groupClasses.push(prefix + '-links-group');

if (linksGroup.inline) groupClasses.push(prefix + '-links-group--inline');

switch(linksGroup.size) {
    case 'sm':
        groupClasses.push(prefix + '-links-group--sm');
        break;

    case 'lg':
        groupClasses.push(prefix + '-links-group--lg');
        break;
 }
 %>

<ul <%- includeClasses(groupClasses) %> <%- includeAttrs(groupAttrs) %>>
<% for (let i = 0; i < links.length; i++) { %>
  <li>
    <%- include('./link.ejs', { link:links[i] }); %>
  </li>
<% } %>
</ul>
`,Ot=[{names:["link"],partial:Ft},{names:["links-group"],partial:Nt}],Rt=`<%#
# paramètres logo

* logo.classes (array, optional) : classes spécifiques à rajouter sur le composant

* logo.title (string, required) : titre du logo (reprend le nom de l'entité)

* logo.size (string, optional) : modificateur de taille.
  valeurs :
  * sm : logo small
  * lg : logo large
  * default : logo taille md

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let logo = locals.logo || {};
let classes = logo.classes || [];
classes.push(prefix + '-logo');

switch(logo.size) {
  case 'sm':
    classes.push(prefix + '-logo--sm');
    break;

  case 'lg':
    classes.push(prefix + '-logo--lg');
    break;
 }
 %>

<p <%- includeClasses(classes); %>>
  <%- logo.title %>
</p>
`,Vt=[{names:["logo"],partial:Rt}],Wt=`<%#
# paramètres du bouton de la modale

* modalButton.id (string, required) : id de la modale

* modalButton.label (string, required) : Libellé du bouton de la modale

* modalButton.opened (boolean, optional) : si true la modale est ouverte

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
    const modalButton = locals.modalButton || {};
    const attributes = {};
    attributes[\`data-\${prefix}-opened\`] = modalButton.opened === true;
    attributes['aria-controls'] = modalButton.id;
    attributes.id = modalButton.id;

%>

<%- include('../../../button/template/ejs/button', {button: {label: modalButton.label, attributes: attributes}}) %>
`,Ut=`<%#
# paramètres de la modale

* modal.id (string, required) : id de la modale

* modal.markup (string, optional) : balise de la modale (dialog, div>)

* modal.titleMarkup (string, optional) : balise du titre de la modale (h1, h2, h3, p, etc.), par défaut h1

* modal.label (string, required) : Libellé du bouton de la modale

* modal.title (string, required) : titre de la modale

* modal.icon (string, optional) : icône de la modale

* modal.body (string, required) : contenu de la modale

* modal.footer (string, optional) : contenu du footer de la modale, généralement des boutons

* modal.customFooter (string, optional) : contenu du footer custom de la modale

* modal.size (string, optional) : modificateur de taille
  valeurs :
  * sm : modale étroite
  * lg : modale large

* modal.classes (array, optional) : classes supplémentaires sur la modale

* modal.closeButton (object, optional) : paramètres du bouton de fermeture

* modal.attributes (object, optional) : attributs supplémentaires sur la modale

* modal.concealingBackdrop (boolean, optional) : par défaut considéré à true, si la valeur false est passée, la modale ne se referme pas au click sur le backdrop.

  // TODO: revoir le template pour remettre les éléments de sample dans sample (footer en array d'objet de config de button par exemple)

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let modal = locals.modal || {};
let modalMarkup = modal.markup || 'dialog';
const titleMarkup = modal.titleMarkup || 'h2';
const isDialog = modalMarkup === 'dialog';
let modalClasses = modal.classes || [];
modalClasses.push(\`\${prefix}-modal\`);

let modalAttrs = modal.attributes || {};

const closeButton = modal.closeButton || {};
closeButton.closeId = modal.id;

const gridClasses = [];
const SIZES = {
  sm: {
    first: 12,
    md: 6,
    lg: 4
  },
  md: {
    first: 12,
    md: 8,
    lg: 6
  },
  lg: {
    first: 12,
    md: 10,
    lg: 8
  },
}
const getGridClasses = (size) => {
  const classes = [];
  const settings = SIZES[size];
  for (let bp in settings) classes.push(\`\${prefix}-col\${bp === 'first' ? '' : '-' + bp }-\${settings[bp]}\` );
  return classes;
}

switch(modal.size) {
  case 'sm':
    case 'lg':
    gridClasses.push.apply(gridClasses, getGridClasses(modal.size));
    break;
  default:
    gridClasses.push.apply(gridClasses, getGridClasses('md'));
}

const titleId = modal.id + '-title';

if (modal.title) modalAttrs['aria-labelledby'] = titleId;

if (modal.top) modalClasses.push(\`\${prefix}-modal--top\`);

if (modal.concealingBackdrop !== undefined) modalAttrs[\`data-\${prefix}-concealing-backdrop\`] = modal.concealingBackdrop;

%>

<<%= modalMarkup %> id="<%= modal.id %>" <%- includeClasses(modalClasses) %> <%- includeAttrs(modalAttrs); %>>
  <div class="<%= prefix %>-container <%= prefix %>-container--fluid <%= prefix %>-container-md">
    <div class="<%= prefix %>-grid-row <%= prefix %>-grid-row--center">
      <div <%- includeClasses(gridClasses); %>>
        <div class="<%= prefix %>-modal__body">
          <div class="<%= prefix %>-modal__header">
            <%- include('../../../button/template/ejs/button-close', {button: closeButton} )%>
          </div>
          <div class="<%= prefix %>-modal__content">
            <% if(modal.title !== undefined) { %>
            <<%= titleMarkup %> id="<%= titleId %>" class="<%= prefix %>-modal__title">
              <% if (modal.icon !== undefined) { %>
              <span class="<%= prefix %>-icon-<%= modal.icon %> <%= prefix %>-icon--lg" aria-hidden="true"></span>
              <% } %>
              <%= modal.title %>
            </<%= titleMarkup %>>
            <% } %>
            <%- modal.body %>
          </div>
          <% if(modal.footer !== undefined) { %>
          <div class="<%= prefix %>-modal__footer">
            <%- modal.footer %>
          </div>
          <% } %>
          <% if(modal.customFooter !== undefined) { %>
            <%- modal.customFooter %>
          <% } %>
        </div>
      </div>
    </div>
  </div>
</<%= modalMarkup %>>
`,Jt=[{names:["buttonModal"],partial:Wt},{names:["modal"],partial:Ut}],Ht=`<%#
# paramètres navigation

* navigation.id (string, required) : id de la barre de navigation

* navigation.arialabel (string, optional) : aria-label de la barre de navigation

* navigation.items (array, required) : tableau d'éléments de navigation (voir : menu, mega-menu, link, btn)

* navigation.classes (array, optional) : classes supplémentaires sur la navigation

* navigation.attributes (object, optional) : attributs supplémentaires sur la navigation

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let navigation = locals.navigation || {};

let classes = navigation.classes || [];
classes.push(\`\${prefix}-nav\`);

let attributes = navigation.attributes || {};
attributes.id = navigation.navigationId || navigation.id;
attributes.role = 'navigation';
attributes['aria-label'] = navigation.ariaLabel;
%>

<nav <%- includeClasses(classes); %> <%- includeAttrs(attributes); %>>
  <% if(navigation.items) { %>
  <ul class="<%= prefix %>-nav__list">
    <%
    for (let i = 0; i < navigation.items.length; i++) {
      const item = navigation.items[i];

      const classes = [prefix + '-nav__item'];
      if (item.align === 'right') classes.push(prefix + '-nav__item--align-right');

      const data = {};

      switch (item.type) {
        case 'link':
          data.link = item;
          break;

        default:
          data.menu = item;
      }

    %>
      <li <%- includeClasses(classes); %>>
        <%- include('./navigation-' + item.type, data); %>
      </li>
    <% } %>
  </ul>
  <% } %>
</nav>
`,Xt=`<%#
# paramètres navigation menu btn

* btn.collapseId (string, required) : id du collapse

* btn.label (string, required) : Libellé du bouton

* btn.active (boolean, optional) : si true l'élément est actif

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const btn = locals.btn || {}
btnClasses = btn.classes || [];
btnAttrs = btn.attributes || {};
btnClasses.push(\`\${prefix}-nav__btn\`);
btnAttrs.id = btn.id;
btnAttrs['aria-expanded'] = false;
btnAttrs['aria-controls'] = btn.collapseId;
btn.type = 'button';
if (btn.active) btnAttrs['aria-current'] = true;
%>

<%- include('../../../../core/template/ejs/action/action', {action: {...btn, classes: btnClasses, attributes: btnAttrs, markup: 'button', label: btn.label}}) %>
`,Qt=`<%#
# paramètres navigation menu link

* link.label (string, required) : Libellé du lien

* link.id (string, required) : id du lien

* link.href (string, required) : url du lien

* link.blank (boolean, optional) [default: false] : si true, target '_blank'

* link.active (boolean, optional) : si true l'élément est actif

* link.disabled (boolean, optional) : si true l'élément est désactivé

* link.isPage (boolean, optional) : si true aria-current: 'page', sinon aria-current: 'true'

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let link = locals.link || {};
const linkClasses = link.classes || [];
const linkAttrs = link.attributes || {};
linkClasses.push(\`\${prefix}-nav__link\`);
linkAttrs.id = link.id;

if (link.active) linkAttrs['aria-current'] = link.isPage ? 'page' : 'true';

%>

<%- include('../../../../core/template/ejs/action/action', {action: {...link, classes: linkClasses, attributes: linkAttrs, markup: 'a'}}) %>

`,Zt=`<%#
# paramètres navigation menu

* menu.collapseId (string, required) : id du collapse

* menu.items (array, required) : tableau d'éléments de navigation (voir : menu, mega-menu, link, btn)

%>
<% eval(include('../../../../core/index.ejs')); %>

<% let menu = locals.menu || {}; %>
<%- include('./navigation-btn', {btn:menu}); %>
<div class="<%= prefix %>-collapse <%= prefix %>-menu" id="<%= menu.collapseId %>">
  <ul class="<%= prefix %>-menu__list">
    <%
    for (item of menu.items) {
      item.isPage = true;
    %>
    <li>
      <%- include('./navigation-link', {link: item}); %>
    </li>
    <% } %>
  </ul>
</div>
`,Kt=`<%#
# paramètres navigation menu leader

* menu.leader.text (string, required) : texte du texte leader

* menu.leader.title (string, optional) : titre du texte leader

* menu.leader.link (object, optional) : paramètres du lien du texte leader (voir composant link)

%>
<% eval(include('../../../../core/index.ejs')); %>

<% let menu = locals.menu || {}; %>
<% let leader = menu.leader || {}; %>

<div class="<%= prefix %>-col-12 <%= prefix %>-col-lg-8 <%= prefix %>-col-offset-lg-4--right" >
  <div class="<%= prefix %>-mega-menu__leader" >
    <%
    if (leader.title !== undefined) {
    %>
      <h4 class="<%= prefix %>-h4 <%= prefix %>-mb-2v"><%= leader.title %></h4>
    <% } %>

    <p class="<%= prefix %>-hidden <%= prefix %>-unhidden-lg"><%- leader.text %></p>

    <%
    if (leader.link !== undefined) {
    %>
      <%- include('../../../link/template/ejs/link', {link: { ...leader.link, alignOnContent: true}}); %>
    <% } %>
  </div>
</div>
`,Yt=`<%#
# paramètres navigation mega-menu

* menu.collapseId (string, required) : id du collapse

* menu.leader (object, optional) : Paramètres du leader du mega-menu (voir leader)

* menu.categories (object, required) : Paramètres des éléments de navigation
  ** menu.categories.items (array, required) : tableau d'éléments de navigation

%>
<% eval(include('../../../../core/index.ejs')); %>

<% let menu = locals.menu || {}; %>
<%- include('./navigation-btn', {btn:menu}); %>
<div class="<%= prefix %>-collapse <%= prefix %>-mega-menu" id="<%= menu.collapseId %>">
  <div class="<%= prefix %>-container <%= prefix %>-container--fluid <%= prefix %>-container-lg">
    <div class="<%= prefix %>-grid-row <%= prefix %>-grid-row-lg--gutters">
      <div class="<%= prefix %>-col-12 <%= prefix %>-mb-n3v">
        <%- include('../../../button/template/ejs/button-close', {button: { closeId: menu.collapseId, label: "Fermer" }}); %>
      </div>
      <%
      if (menu.leader !== undefined) {
      %>
      <%- include('./navigation-leader', {menu: menu}); %>

      <% } %>

      <%
        for (category of menu.categories) {
      %>

      <div class="<%= prefix%>-col-12 <%= prefix%>-col-lg-3">
        <h5 class="<%= prefix %>-mega-menu__category">
          <%- include('./navigation-link', {link: category}); %>
        </h5>

        <ul class="<%= prefix %>-mega-menu__list">
          <%
          for (let i = 0; i < category.items.length; i++) {
              let item = category.items[i];
              item.isPage = true;
          %>
          <li>
            <%- include('./navigation-link', {link: item}); %>
          </li>
          <% } %>
        </ul>
      </div>
      <% } %>
    </div>
  </div>
</div>
`,ea=[{names:["navigation-btn"],partial:Xt},{names:["navigation-link"],partial:Qt},{names:["navigation-leader"],partial:Kt},{names:["navigation-mega-menu"],partial:Yt},{names:["navigation-menu"],partial:Zt},{names:["navigation"],partial:Ht}],na=`<%#
# paramètres notice

* notice.title (String, required): Titre du bandeau

* notice.id (String, optional): Id du bandeau

* notice.desc (string, optional) : Texte de decription de bandeau

* notice.link (object, optional): Paramètres du lien

* notice.type (String, optional): Type de bandeau [info/warning/alert/weather-orange/weather-red/weather-purple/kidnapping/cyberattack/attack/witness]

* notice.icon (String, optional): Nom de l'icône du bandeau ou false pour ne pas afficher d'icône

* notice.dismissible (boolean, optional): Ajoute un bouton de fermeture

* notice.button (object, optional): Paramètre du bouton de fermeture (si dismissible: true)

* notice.notice (boolean, optional): Si true, ajoute un role notice (si insertion à la volée du bandeau)

* notice.markup (string, optional): Balise de contenu du bandeau (p [default], h1, h2, h3, h4, h5, h6)

* notice.classes (array, optional): Classes supplémentaires sur le bandeau

* notice.attribute (object, optional): Attributs supplémentaires sur le bandeau

%>

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const notice = locals.notice || {};
const title = notice.title || false;
const desc = notice.desc || false;
const link = notice.link || false;
const type = notice.type || false;
const classes = notice.classes || [];
const attributes = notice.attributes || {};
const markup = notice.markup || 'p';
classes.push(prefix + '-notice');
const titleClasses = [\`\${prefix}-notice__title\`];
if (type) classes.push(prefix + '-notice--' + type);
if (notice.notice) attributes.role = "notice";
if (notice.id) attributes.id = notice.id;
if (notice.icon === false) classes.push(prefix + '-notice--no-icon');
else if (notice.icon) titleClasses.push(prefix + '-icon-' + notice.icon);
 %>

<div <%- includeAttrs(attributes); %> <%- includeClasses(classes); %>>
  <div class="<%= prefix %>-container">
    <div class="<%= prefix %>-notice__body">
      <<%= markup %>>
        <% if (title) { %>
          <span <%- includeClasses(titleClasses) %>><%- title %></span>
        <% } %>
        <% if (desc) { %>
          <span class="<%= prefix %>-notice__desc"><%- desc %></span>
        <% } %>
        <% if (link) { %>
          <%- include('../../../../core/template/ejs/action/action.ejs', {action: {...notice.link, classes: [\`\${prefix}-notice__link\`], markup: 'a'}}) %>
        <% } %>
      </<%= markup %>>
      <% if (notice.dismissible) { %>
        <%- include('../../../button/template/ejs/button', {button: {size: 'md', classes: [\`\${prefix}-btn--close\`], ...notice.button}}) %>
      <% } %>
    </div>
  </div>
</div>
`,ta=[{names:["notice"],partial:na}],aa=`<%#
# Paramètres pagination

* pagination.first (object, optional): item first

* pagination.prev (object, optional): item précédent

* pagination.pages (array, optional): Paramètres des items de pagination par numéro de pages

* pagination.next (object, optional): item suivant

* pagination.last (object, optional): item last

%>
<%
  let pagination = locals.pagination || {};
  const attrPagination = pagination.attr || {};
  attrPagination['aria-label'] = 'Pagination';
  if (pagination.pages && pagination.pages.length) attrPagination['data-fr-analytics-page-total'] = pagination.pages[pagination.pages.length - 1].label;
%>
<% eval(include('../../../../core/index.ejs')); %>

<nav role="navigation" class="<%= prefix %>-pagination" <%- includeAttrs(attrPagination) %>>
  <ul class="<%= prefix %>-pagination__list">
    <%
    let disabled = pagination.pages && pagination.pages[0].active === true;
    %>
    <% if (pagination.first !== undefined) { %><%- include('./pagination-item.ejs', {paginationItem: {...pagination.first, type:'first', disabled: disabled}}); %><% } %>
    <% if (pagination.prev !== undefined) { %><%- include('./pagination-item.ejs', {paginationItem: {...pagination.prev, type:'prev', disabled: disabled}}); %><% } %>

    <%
    let page;
    if (pagination.pages) for (let i = 0; i < pagination.pages.length; i++) {
      page = pagination.pages[i];
    %>
      <%- include('./pagination-item.ejs', {paginationItem: page}); %>
    <% } %>

    <%
    disabled = pagination.pages && pagination.pages[pagination.pages.length - 1].active === true;
    %>
    <% if (pagination.next !== undefined) { %><%- include('./pagination-item.ejs', {paginationItem: {...pagination.next, type:'next', disabled: disabled}}); %><% } %>
    <% if (pagination.last !== undefined) { %><%- include('./pagination-item.ejs', {paginationItem: {...pagination.last, type:'last', disabled: disabled}}); %><% } %>
  </ul>
</nav>
`,ia=`<%#
# Paramètres pagination item

* paginationItem.markup (string, optional): markup de l'élement (default: 'a'))

* paginationItem.type (string, optional): type d'élement (first, prev, next, last)

* paginationItem.href (string, optional): url de destination, si l'élement est un lien

* paginationItem.title (string, optional): attribut title de l'élement

* paginationItem.disabled (boolean, optional): si true, désactive l'élement

* paginationItem.hasLabel (boolean, optional): affiche le libellé dans l'élement

* paginationItem.hasLgLabel (boolean, optional): affiche le libellé dans l'élement à partir du breakpoint lg

* paginationItem.displayedLg (boolean, optional): affiche l'élement à partir du breakpoint lg

* paginationItem.classes (array, optional): Classe supplémentaires sur l'élement

* paginationItem.attributes (object, optional): Attributs supplémentaires sur l'élement

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let paginationItem = locals.paginationItem || {};
const classes = paginationItem.classes || [];
const attrs = paginationItem.attributes || {};
attrs.id = paginationItem.id;
const markup = paginationItem.markup || 'a';

classes.push(prefix + '-pagination__link');

if (paginationItem.active) attrs['aria-current'] = 'page';

if (paginationItem.type) classes.push(prefix + '-pagination__link--' + paginationItem.type);

if (paginationItem.href !== undefined && !paginationItem.disabled && markup === 'a' && !paginationItem.active) attrs.href = paginationItem.href;
if (paginationItem.title) attrs.title = paginationItem.title;

switch(true) {
  case paginationItem.hasLgLabel:
    classes.push(prefix + '-pagination__link--lg-label');
    break;

  case paginationItem.hasLabel:
    classes.push(prefix + '-pagination__link--label');
    break;
}

if (paginationItem.displayedLg === true) {
  classes.push(prefix + '-hidden');
  classes.push(prefix + '-unhidden-lg');
}
if (paginationItem.disabled) {
  switch(markup) {
    case 'input':
    case 'button':
      attrs.disabled = '';
        break;

    case 'a':
      attrs['aria-disabled'] = 'true';
      attrs.role = 'link';
        break;
  }
}
%>

<li>
  <<%= markup %> <%- includeClasses(classes) %> <%- includeAttrs(attrs) %>>
    <% if (paginationItem.label !== undefined ) { %><%- paginationItem.label %><% } %>
  </<%= markup %>>
</li>
`,sa=[{names:["pagination"],partial:aa},{names:["pagination-item"],partial:ia}],ra=`<%#
# paramètres password

* password.id (string, required) : id du mot de passe

* password.input (object, optional) : paramètres de l'input (voir composant input)
  ** input.id (string, optional) : id de l'input
  ** input.label (string, optional) : libellé de l'input
  ** input.name (string, optional) : nom de l'input
  ** input.classes (array, optional) : classes spécifiques à rajouter sur l'input
  ** input.labelClasses (array, optional) : classes spécifiques à rajouter sur le label

* password.checkbox (object, optional) : paramètres de la case à cocher afficher/masquer le mot de passe (voir composant checkbox)
  ** checkbox.id (string, optional) : id de la case à cocher
  ** checkbox.label (string, required) : libellé de la case à cocher
  ** checkbox.ariaLabel (string, optional) : libellé pour l'accessibilité
  ** checkbox.attributes (object, optional) : attributs supplémentaires sur la case à cocher

* password.link (object, optional) paramètres du lien Mot de passe oublié
  ** password.link.href (string, required) : lien vers la page de récupération du mot de passe
  ** password.link.label (string, required) : libellé "Mot de passe oublié ?"
  ** password.link.attributes (object, optionnal) : Attributs supplémentaire sur le lien (ex: {target:'_blank'})

* password.attributes (object, optional) : attributs spécifiques à rajouter sur le mot de passe

* password.classes (array, optional) : classes spécifiques à rajouter sur le mot de passe

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const password = locals.password || {button:{}, input:{}}
const passwordClasses = [...password.classes || [], prefix + '-password'];
const attributes = password.attributes || {};
const describedby = [];
attributes.id = password.id;

const input = password.input || {};
input.id = input.id || password.id + '-input';
input.name = input.name || 'password';
input.classes = [...input.classes || [], prefix + '-password__input'];
input.labelClasses = [...input.labelClasses || [], prefix + '-password__label'];
input.type = 'password';
input.icon = true; // ajoute le wrapper pour l'icone capslock
input.required = true;
input.attributes = input.attributes || {};
input.attributes.autocapitalize = "off";
input.attributes.autocorrect = "off";
input.messages = password.messages;

let checkbox = false;
if (password.checkbox) {
  checkbox = {
    ...password.checkbox,
    classes: [...password.checkbox.classes || [], \`\${prefix}--password__checkbox\`],
    label: password.checkbox.label || getText('show', 'password'),
    id: checkbox.id || \`\${password.id}-show\`,
    size: 'sm',
    includeEmptyMessagesGroup: false,
    attributes: {
      'aria-label': password.checkbox.ariaLabel || getText('show.long', 'password'),
      ...password.checkbox.attributes
    }
  };
}

let link = false;
if (password.link) {
  link = {
    label: password.link.label || getText('link.label', 'password'),
    href: password.link.href || '#',
    classes: [...password.link.classes || [], \`\${prefix}-link\`],
    attributes: {
      id: password.link.id,
      ...password.link.attributes
    }
  }
}
%>

<div <%- includeClasses(passwordClasses); %> <%- includeAttrs(attributes) %>>
  <%- include('../../../input/template/ejs/input.ejs', {input: input}); %>

  <% if (password.checkbox) { %>
    <div class="<%= prefix %>-password__checkbox <%= prefix %>-checkbox-group <%= prefix %>-checkbox-group--sm">
      <%- include('../../../checkbox/template/ejs/checkbox.ejs', {checkbox: checkbox}); %>
    </div>
    <% } %>

  <% if (password.link) { %>
    <p>
      <a href="<%= link.href %>" <%- includeClasses(link.classes); %> <%- includeAttrs(link.attributes); %>><%= link.label %></a>
    </p>
  <% } %>
</div>
`,la=[{names:["password"],partial:ra}],oa=`<%#
# paramètres Quote

* quote.size (string, optional): Taille du texte de citation

* quote.text (string, optional) : Texte de la citation

* quote.image (object, optional) : {img, alt} de l'image

* quote.href (string, optional): url du texte original cité

* quote.author (string, optional): Nom de l'auteur

* quote.accent (string, optional): Couleur d'accentuation

* quote.sources (array, optional): Tableau de textes de détail

%>

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let quote = locals.quote || {};
let size = quote.size || undefined;
let text = quote.text || '';
let image = quote.image || undefined;
let author = quote.author || false;
let href = quote.href || undefined;
let sources = quote.sources || [];
let quoteClasses = [prefix + '-quote'];
let citeAttr = [];
let sizeClasses = [];
const blockAttrs = {cite: href};
const quoteAttrs = {};
if (quote.id) quoteAttrs.id = quote.id;
if (quote.accent !== undefined) quoteClasses.push(prefix + '-quote--' + quote.accent);
if (image) quoteClasses.push(prefix + '-quote--column');
if (size) sizeClasses = [prefix+'-text--'+size];
%>

<figure <%- includeAttrs(quoteAttrs) %> <%- includeClasses(quoteClasses) %>>
  <blockquote <%- includeAttrs(blockAttrs) %>>
    <p <%- includeClasses(sizeClasses) %>>« <%= text %> »</p>
  </blockquote>
  <figcaption>
    <% if (author) { %>
      <p class="<%= prefix %>-quote__author"><%= author %></p>
    <% } %>

    <% if (sources && sources.length > 1) { %>
      <ul class="<%= prefix %>-quote__source">
      <% for (source in sources) { %>
        <li><%- sources[source] %></li>
      <% } %>
      </ul>
    <% } else { %>
      <div class="<%= prefix %>-quote__source">
        <%- sources[0] %>
      </div>
    <% } %>

    <% if (image) { %>
      <div class="<%= prefix %>-quote__image">
          <%- include('../../../../core/template/ejs/media/responsive-img.ejs', {media: image}); %>
      </div>
    <% } %>
  </figcaption>
</figure>
`,da=[{names:["quote"],partial:oa}],ca=`<%#
# paramètres radio group

* radio.size (string, optional) : la valeur "sm" permet d'opter pour de petites cases à cocher

* radio.rich (boolean, optional) : si true, radio de type radio-rich

* radio.disabled (boolean, optional) : si true, désactive le radio

%>
<% eval(include('../../../../core/index.ejs')); %>
<%
let radio = locals.radio || {};
let groupClasses = [prefix + '-radio-group'];
if (radio.rich) groupClasses.push(prefix + '-radio-rich');
switch(radio.size) {
  case 'sm' :
    groupClasses.push(prefix + '-radio-group--sm');
    break;
}
%>

<div <%- includeClasses(groupClasses); %>>
  <%- include('./radio', {radio: {...radio, disabled: radio.disabled ? radio.disabled : false}}); %>
</div>
`,ua=`<%#
# paramètres

* radio.classes (array, optional) : Classes supplémentaires sur l'element

* radio.attributes (object, optional) : Attributs supplémentaires sur l'element

* radio.image (object, optional) : Paramètres de l'image sur le radio
  ** radio.image.type (string, optional) : Type d'image sur le radio [img/svg/pictogram]
  ** radio.image.src (string, optional) : Chemin vers l'image ou le svg
  ** radio.image.name (string, optional) : Si type pictogram, nom du pictogramme

* radio.element (object, optional) : paramètre de chacun des radios d'un group

* radio.value (String, optional) : valeur du radio

* radio.icon (string, optional) : nom de l'icone illustrative

* radio.disabled (boolean, optional) : si true, désactive le radio

* radio.checked (boolean, optional) : si true, le radio est coché

* radio.id (string, required) : id du composant

* radio.name (string, optional) : Attribut name du composant

* radio.hint (string, optional) : Message d'aide

* radio.error (string, optional) : Message d'erreur

* radio.valid (string, optional) : Message de succès

* radio.customIcon (string, optional) : style du label (ex: "background-image: url(...)")

%>
<% eval(include('../../../../core/index.ejs')); %>
<%
const radio = locals.radio || {};
const attributes = radio.attributes || {};
const label = {
  label: radio.label,
  for: radio.id,
  hint: radio.hint || undefined
};

if (radio.value) attributes.value = radio.value;
if (radio.disabled) attributes.disabled = '';
if (radio.checked) attributes.checked = '';

%>

<input <%- includeAttrs(attributes); %> type="radio" id="<%= radio.id %>" name="<%= radio.name %>">
<%- include('../../../form/template/ejs/label', { label: label }); %>
<% if (radio.pictogram) { %>
  <div class="<%= prefix %>-radio-rich__pictogram">
    <%- include('../../../../core/template/ejs/artwork/pictogram.ejs', {pictogram: radio.pictogram}); %>
  </div>
<% } %>
`,pa=[{names:["radio-group"],partial:ca},{names:["radio"],partial:ua}],ma=`<%#
# paramètres search

* search.id (string, required) : id de la barre de recherche

* search.placeholder (string, required) : text du placeholder de l'input

* search.size (string, optional) : modificateur de taille.
  valeurs:
  * lg : barre de recherche large

* search.input (object, optional) : paramètres de l'input

* search.button (object, optional) : paramètres du bouton de recherche

* search.attributes (object, optional) : attributs spécifiques à rajouter sur le search

* search.classes (array, optional) : classes spécifiques à rajouter sur le search

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let search = locals.search || {button:{}, input:{}}
let searchClasses = [...search.classes || [], prefix + '-search-bar'];
let attributes = search.attributes || {};
attributes.id = search.id;
attributes.role = "search";

let button = search.button || {};
button.span = true;

const input = search.input || {};
if (!input.id) input.id = search.id + '-input';

switch(search.size) {
case 'lg':
  searchClasses.push(prefix + '-search-bar--lg');
  break;
}
%>

<div <%- includeClasses(searchClasses); %> <%- includeAttrs(attributes) %>>
  <%- include('../../../input/template/ejs/input.ejs', {input:{...search.input, type: 'search'}}); %>
  <%- include('../../../button/template/ejs/button.ejs', {button: button}); %>
</div>
`,ba=[{names:["search"],partial:ma}],ga=`<%#
# paramètres select group

* select.valid (string, optional) : message de validation

* select.error (string, optional) : message d'erreur

* select.disabled (boolean, optional) : si true, désactive le select

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let select = locals.select || {};
let groupClasses = [\`\${prefix}-select-group\`];

if (select.error !== undefined) groupClasses.push(\`\${prefix}-select-group--error\`);
if (select.disabled) groupClasses.push(\`\${prefix}-select-group--disabled\`);
if (select.valid !== undefined) groupClasses.push(\`\${prefix}-select-group--valid\`);
%>

<div <%- includeClasses(groupClasses); %>>
  <%- include('./select', {select:select}); %>
</div>
`,fa=`<%#
# paramètres select

* select.id (string, required) : id du label et du select, sert également à construire les ids des messages valid, error et hint

* select.label (string, required) : libellé du select

* select.optionGroups (array) : groupes d'options du select, un array d'objets avec :
  * label : label du groupe d'options
  * options (array) : options du select, un array d'objets avec :
    * value : attribut value de l'option
    * label : libellé de l'option

* select.options (array) : options du select, un array d'objets avec :
  * value : attribut value de l'option
  * label : libellé de l'option

* select.placeholder (string, optional) : text du placeholder du select

* select.valid (string, optional) : message de validation

* select.error (string, optional) : message d'erreur

* select.hint (string, optional) : message d'aide

* select.required (boolean, optional) : attribut "aria-required" sur le select

* select.disabled (boolena, optional) : attribut "disabled" sur le select

* select.autocomplete (String, optional) : attribut "autocomplete" sur le select

* select.includeEmptyMessagesGroup (boolean, optional) : true par défaut

* select.attributes (object, optional) : attributs spécifiques à rajouter sur le select

* select.classes (array, optional) : classes spécifiques à rajouter sur le select


%>
<% eval(include('../../../../core/index.ejs')); %>
<% eval(include('../../../form/template/ejs/message/builder.js.ejs')); %>

<%
let select = locals.select || {};

let classes = select.classes || [];
let attributes = select.attributes || {};
attributes.autocomplete = select.autocomplete;
let describedby = [];
classes.push(\`\${prefix}-select\`);

const label = {
    label: select.label,
    for: select.id,
    classes: select.labeClasses,
    attributes: select.labelAttributes,
}

const builder = new MessageBuilder(select.id, select.includeEmptyMessagesGroup);

if (select.valid) {
  builder.addValid(select.valid);
}
if (select.error) {
  builder.addError(select.error);
}
if (builder.isIncluded) describedby.push(...builder.ids);

if (select.hint) {
    label.hint = select.hint;
}

if (describedby.length > 0) attributes['aria-describedby'] = describedby.join(' ');
if (select.autocomplete) attributes.autocomplete = select.autocomplete;
if (select.required === true) attributes['aria-required'] = true;
if (select.disabled === true) attributes['disabled'] = '';
%>

<%- include('../../../form/template/ejs/label', { label: label }); %>

<select <%- includeClasses(classes); %> <%- includeAttrs(attributes); %> id="<%= select.id %>" name="<%= select.name || select.id %>">
  <% if (select.placeholder != undefined) { %>
  <option value="" selected disabled><%= select.placeholder %></option>
  <% } %>

  <% if (select.optionGroups != undefined) { %>
    <%
    for (let i = 0; i < select.optionGroups.length; i++) {
      let optionGroup = select.optionGroups[i];
    %>
      <optgroup label="<%= optionGroup.label %>">
      <%
      for (let i = 0; i < optionGroup.options.length; i++) {
        let option = optionGroup.options[i];
      %>
        <option value="<%= option.value %>"><%= option.label %></option>
      <% } %>
      </optgroup>
    <% } %>
  <% } else { %>
    <%
    for (let i = 0; i < select.options.length; i++) {
      let option = select.options[i];
    %>
    <option value="<%= option.value %>"><%= option.label %></option>
    <% } %>
  <% } %>
</select>

<%- include('../../../form/template/ejs/message/messages-group', { messagesGroup: builder.messagesGroup }); %>

`,ha=[{names:["select-group"],partial:ga},{names:["select"],partial:fa}],va=`<%#
# paramètres range

* range.id (string, required) : id du curseur

* range.groupId (string, optional) : id du groupe

* range.classes (array, optional) : classes du groupe

* range.attributes (object, optional) : attributs du groupe

* range.name (string, required) : attribut 'name' de l'input

* range.label (string, required) : texte du label

* range.hint (string, optional) : texte de description sous le label

* range.size (string, optional) : taille du curseur (valeur : 'sm')

* range.inputAttributes (array, optional) : attributs de l'input

* range.min (number, required) : valeur minimale du curseur

* range.max (number, required) : valeur maximale du curseur

* range.value (number, optional) : valeur initiale du curseur

* range.value2 (number, optional) : 2eme valeur initiale pour le curseur double

* range.step (number, optional) : pas du curseur

* range.prefix (string, optional) : texte avant la valeur du curseur

* range.suffix (string, optional) : texte après la valeur du curseur

* range.isDouble (boolean, optional) : mode double curseur [default: false]

* range.isStep (boolean, optional) : mode curseur à pas [default: false]

* range.indicators (boolean, optionnal): Pour afficher les valeurs min et max sous le curseur [default: true]

* range.error (string, optional) : ajoute un texte d'erreur

* range.valid (string, optional) : ajoute un texte de succès

* range.disabled (boolean, optional) : Permet de désactiver le champ [defaut: false]

%>

<% eval(include('../../../../core/index.ejs')); %>
<% eval(include('../../../form/template/ejs/message/builder.js.ejs')); %>
<%

const range = locals.range || {};

const groupAttributes = range.attributes || {};
groupAttributes.id = range.groupId || uniqueId('range-group');
const groupClasses = range.classes || [];
groupClasses.push(\`\${prefix}-range-group\`);

const label = { label: range.label, hint: range.hint, id: \`\${range.id}-label\` };

const decorate = (value) => \`\${range.prefix ?? ''}\${value}\${range.suffix ?? ''}\`;

const rangeAttributes = {};
if (range.prefix) rangeAttributes[\`data-\${prefix}-prefix\`] = range.prefix;
if (range.suffix) rangeAttributes[\`data-\${prefix}-suffix\`] = range.suffix;
const rangeClasses = [\`\${prefix}-range\`];
if (range.size) rangeClasses.push(\`\${prefix}-range--\${range.size}\`);
if (range.isDouble) rangeClasses.push(\`\${prefix}-range--double\`);
if (range.isStep) rangeClasses.push(\`\${prefix}-range--step\`);

const inputAttributes = range.inputAttributes || {};
inputAttributes.id = range.id;
inputAttributes.name = range.name;
inputAttributes.type = 'range';
inputAttributes['aria-labelledby'] = label.id;
if (range.min) inputAttributes.min = range.min;
if (range.max) inputAttributes.max = range.max;
if (range.value) inputAttributes.value = range.value;
if (range.step) inputAttributes.step = range.step;

const input2Attributes = {
  ...inputAttributes,
  value: range.value2,
  id: \`\${range.id}-2\`,
  name: \`\${range.name}-2\`
}

const builder = new MessageBuilder(range.id);
if (range.valid) {
  groupClasses.push(\`\${prefix}-range-group--valid\`);
  builder.addValid(range.valid);
}
if (range.error) {
  groupClasses.push(\`\${prefix}-range-group--error\`);
  builder.addError(range.error);
}
if (range.disabled) {
  groupClasses.push(\`\${prefix}-range-group--disabled\`);
  inputAttributes.disabled = '';
  input2Attributes.disabled = '';
}
if (builder.describedby.length > 0) {
  inputAttributes['aria-describedby'] = builder.describedby.join(' ');
  input2Attributes['aria-describedby'] = builder.describedby.join(' ');
}
%>

<div <%- includeClasses(groupClasses); %> <%- includeAttrs(groupAttributes); %>>
  <%- include('../../../form/template/ejs/label', { label : label }); %>

  <div <%- includeClasses(rangeClasses); %> <%- includeAttrs(rangeAttributes); %>>
    <span class="<%= prefix %>-range__output"><%= decorate(range.value) %></span>

    <input <%- includeAttrs(inputAttributes); %> >

    <% if (range.isDouble) { %>
      <input <%- includeAttrs(input2Attributes); %> >
    <% } %>

    <% if (range.indicators !== false) { %>
      <span class="<%= prefix %>-range__min" aria-hidden="true"><%= decorate(range.min) %></span>
      <span class="<%= prefix %>-range__max" aria-hidden="true"><%= decorate(range.max) %></span>
    <% } %>

  </div>

  <%- include('../../../form/template/ejs/message/messages-group', { messagesGroup: builder.messagesGroup }); %>
</div>
`,xa=[{names:["range"],partial:va}],ka=`<%#
# paramètres segmented

* segmented.elements (array, required) : Tableau d'éléments segmented-element

* segmented.legend (string, required) : Texte de la légende

* segmented.hint (array, optional) : texte additionel dans la légende (uniquement si inlineLegend = false)

* segmented.size (string, optional) : la valeur "sm" permet d'opter pour une taille plus petite

* segmented.legendInline (boolean, optional) : si true, affiche la légende sur la même ligne que le contrôle segmenté [default: false]

* segmented.noLegend (boolean, optional) : si true, n'affiche pas la légende [default: false]

* segmented.groupClasses (array, optional) : Classes supplémentaires sur le groupe

* segmented.groupAttributes (object, optional) : Attributs supplémentaires sur le groupe
%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const segmented = locals.segmented || {};
const groupClasses = segmented.classes || [];
const groupAttributes = segmented.attributes || {};
const legendClasses = [\`\${prefix}-segmented__legend\`];
groupClasses.push(prefix + '-segmented');
if (segmented.id) groupAttributes.id = segmented.id;
if (segmented.legendInline === true) legendClasses.push(prefix + '-segmented__legend--inline');
if (segmented.noLegend) groupClasses.push(prefix + '-segmented--no-legend');
switch (segmented.size) {
  case 'sm' :
    groupClasses.push(prefix + '-segmented--sm');
    break;
}
%>

<fieldset <%- includeClasses(groupClasses); %> <%- includeAttrs(groupAttributes) %>>
  <legend <%- includeClasses(legendClasses); %>>
    <% if (segmented.legend) { %>
      <%= segmented.legend %>
    <% } %>

    <% if (segmented.hint) { %>
      <span class="<%= prefix %>-hint-text"><%= segmented.hint %></span>
    <% } %>
  </legend>

  <div class="<%= prefix %>-segmented__elements">
    <% for (const element of segmented.elements) { %>
      <%- include('segmented-element.ejs', { element: element }); %>
    <% } %>
  </div>
</fieldset>
`,ya=`<%#
# paramètres

* element.id (string, required) : id de l'élément

* element.label (string, required) : Libellé de l'input

* element.name (string, optional) : attribut name de l'input

* element.value (String, optional) : valeur de l'input

* element.icon (string, optional) : nom de l'icône dans le label

* element.disabled (boolean, optional) : si true, désactive l'élément [default: false]

* element.checked (boolean, optional) : si true, l'élement est actif (1 seul possible par segmented) [default: false]

* element.classes (array, optional) : classes supplémentaires sur l'élément

* element.attributes (object, optional) : attributs supplémentaires sur l'élément
%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const element = locals.element || {};
const attributes = element.attributes || {};
const classes = element.classes || [];
classes.push(\`\${prefix}-segmented__element\`);

const label = {
  label: element.label,
  for: element.id,
  classes: [],
};

if (element.icon) label.classes.push(\`\${prefix}-icon-\${element.icon}\`);
if (element.value) attributes.value = element.value;
if (element.disabled) attributes.disabled = '';
if (element.checked) attributes.checked = '';

%>

<div <%- includeClasses(classes); %>>
  <input <%- includeAttrs(attributes); %> type="radio" id="<%= element.id %>" name="<%= element.name %>">
  <%- include('../../../form/template/ejs/label.ejs', { label: label }); %>
</div>`,ja=[{names:["segmented-element"],partial:ya},{names:["segmented"],partial:ka}],wa=`<%#
# paramètres share

* share.title (string, required) : titre du bloc de partage

* share.buttons (array, required) : Tableau de boutons de partage (name, label, attributes, icon)

* share.classes (array, optional) : Classes sur le bloc share

* share.text (string, optional) : Texte supplémentaire si désactivé

* share.disabled (boolean, optional) : Désactive les liens de partage

%>
<%
eval(include('../../../../core/index.ejs'));
let share = locals.share || {};
let shareClasses = share.classes || [];
let shareAttrs = share.attributes || {};
shareClasses = [\`\${prefix}-share\`];
if (share.id) shareAttrs.id = share.id;

const mapShareButton = (data) => {
  const button = {
    label: data.label,
    title: data.title,
    attributes: data.attributes,
    tooltip: data.tooltip,
    classes: [],
  }
  if (data.classes) button.classes = data.classes;
  if (data.type) button.classes.push(\`\${prefix}-btn--\${data.type}\`);

  if (data.comments) button.comments = data.comments;
  if (data.onclick) button.onclick = data.onclick;
  if (data.id) button.id = data.id;

  switch (data.type) {
    case 'bluesky':
    case 'facebook':
    case 'twitter':
    case 'twitter-x':
    case 'threads':
    case 'linkedin':
      button.disabled = share.disabled;
      button.markup = 'a';
      button.href = data.url;
      button.blank = true;
      button.rel = 'noopener';
      button.onclick = \`window.open(this.href,'\${data.label}','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=\${data.width},height=\${data.height}'); event.preventDefault();\`
      break;

    case 'mail':
      button.markup = 'a';
      button.href = data.url;
      button.blank = true;
      break;

    case 'copy':
      button.markup = 'button';
      button.onclick = data.onclick;
      break;
  }

  return button;
};

const buttonsGroup = {
  buttons: share.buttons.map(button => mapShareButton(button))
}

%>

<div <%- includeClasses(shareClasses); %> <%- includeAttrs(shareAttrs); %> >
  <p class="<%= prefix %>-share__title"><%- share.title %></p>

  <% if (share.disabled) { %>
    <p class="<%= prefix %>-share__text"><%- share.text %></p>
  <% } %>

  <%- include('../../../button/template/ejs/buttons-group', {buttonsGroup : buttonsGroup}); %>
</div>
`,Ca=[{names:["share"],partial:wa}],_a=`<%#
# paramètres sidemenu

* sidemenu.items (array, required) : tableau d'elements

* sidemenu.title (String, required) : titre du sidemenu

* sidemenu.modifier (string, optional) : modifier de style de sidemenu ('sticky-full-height', 'sticky', 'right')

* sidemenu.collapseId : id du collapse (mobile)

* sidemenu.buttonLabel (object, required) : libellé du bouton du sidemenu en mobile

%>
<% let sidemenu = locals.sidemenu || {}; %>
<% eval(include('../../../../core/index.ejs')); %>

<nav class="<%= prefix %>-sidemenu<% if(sidemenu.modifier){%> <%= prefix %>-sidemenu--<%- sidemenu.modifier %><%}%>" role="navigation" aria-labelledby="<%= sidemenu.titleId %>">
	<div class="<%= prefix %>-sidemenu__inner">
		<%- include('../../../../core/template/ejs/action/action', { action: { label: sidemenu.buttonLabel, type: 'button', markup: 'button', attributes: { 'aria-expanded': false, 'aria-controls': sidemenu.collapseId }, classes: [\`\${prefix}-sidemenu__btn\`] }}) %>
		<div class="<%= prefix %>-collapse" id="<%- sidemenu.collapseId %>">
			<p class="<%= prefix %>-sidemenu__title" id="<%= sidemenu.titleId %>"><%- sidemenu.title %></p>
			<%- include('./sidemenu-list.ejs', {sidemenuItems: sidemenu.items}); %>
		</div>
	</div>
</nav>
`,Aa=`<%#

Paramètres de sidemenu btn

* sidemenuItems (array, required) : tableau d'items de sidemenu

%>
<% eval(include('../../../../core/index.ejs')); %>

<% let sidemenuItems = locals.sidemenuItems || []; %>

<ul class="<%= prefix %>-sidemenu__list" >
  <%
  for (let i = 0; i < sidemenuItems.length; i++) {
    let item = sidemenuItems[i];
    item.href = item.href || sidemenuItems.href;
    item.classes = [\`\${prefix}-sidemenu__\${item.type}\`];
    item.attributes = sidemenuItems[i].attributes || {};
    item.markup = item.type === 'button' ? 'button' : 'a';
    let classes = [prefix + '-sidemenu__item'];
  %>
    <li <%- includeClasses(classes); %>>
      <% if (item.type === 'menu') { %>
        <%- include('./sidemenu-menu.ejs', { sidemenuItem : item }); %>
      <% } else {%>
        <% item.classes = item.type === 'button' ? [\`\${prefix}-sidemenu__btn\`] : [\`\${prefix}-sidemenu__link\`]; %>
        <% if (item.active) item.attributes['aria-current'] = 'page'; %>
        <%- include('../../../../core/template/ejs/action/action', { action: { ...item } }) %>
      <% } %>
    </li>
  <% } %>
</ul>
`,qa=`<%#

Paramètres de sidemenu item

* sidemenuItem.isCollapsible (booolean, optional) : si true, l'élement est refermable

* sidemenuItem.collapseId (string, required) : id du collapse

* sidemenuItem.items (array, optional) : tableau de sous éléments

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let sidemenuItem = locals.sidemenuItem || {};
const action = {
    label: sidemenuItem.label,
    attributes: {},
    classes: []
};
const sidemenuClasses = [];
const sidemenuAttrs = {};

if (sidemenuItem.active) action.attributes['aria-current'] = true;

switch (sidemenuItem.isCollapsible) {
    case true:
        action.type = 'button';
        action.markup = 'button';
        action.classes.push(\`\${prefix}-sidemenu__btn\`);
        action.attributes['aria-expanded'] = sidemenuItem.isExpanded === true;
        action.attributes['aria-controls'] = sidemenuItem.collapseId;
        sidemenuClasses.push(\`\${prefix}-collapse\`);
        if (sidemenuItem.isExpanded) sidemenuClasses.push(\`\${prefix}-collapse--expanded\`);
        sidemenuAttrs.id = sidemenuItem.collapseId;
        break;
    default:
        action.markup = 'a';
        action.classes.push(\`\${prefix}-sidemenu__link\`);
        action.href = sidemenuItem.href;
        break;
}

%>

<%- include('../../../../core/template/ejs/action/action', { action: action }) %>

<div <%- includeClasses(sidemenuClasses) %> <%- includeAttrs(sidemenuAttrs)%>>
  <%- include('./sidemenu-list.ejs', {sidemenuItems: sidemenuItem.items}); %>
</div>
`,Ia=[{names:["sidemenu-list"],partial:Aa},{names:["sidemenu-menu"],partial:qa},{names:["sidemenu"],partial:_a}],Pa=`<%#
# paramètres skiplink

* skiplink.items (array, required): tableau de liens
  ** skiplink.items[].href (string, required) : ancre vers un id dans la page
  ** skiplink.items[].label (string, required) : libellé du lien
  ** skiplink.items[].attributes (object, optional) : attributs supplémentaires du lien

%>
<% eval(include('../../../../core/index.ejs')); %>

<% let skiplink = locals.skiplink || {}; %>
<div class="<%= prefix %>-skiplinks">
  <nav role="navigation" aria-label="Accès rapide" class="<%= prefix %>-container">
    <ul class="<%= prefix %>-skiplinks__list">
      <% for (const item of skiplink.items) { %>
        <li>
          <a <%- includeAttrs(item.attributes) %> class="<%= prefix %>-link" href="<%= item.href %>" ><%= item.label %></a>
        </li>
      <% } %>
    </ul>
  </nav>
</div>
`,La=[{names:["skiplinks"],partial:Pa}],$a=`<%#
# paramètres stepper (indicateur d'étapes)

* stepper.title (string, required): Titre de l'indicateur d'étapes

* stepper.id (String, optional): Id du composant

* stepper.currentStep (integer, required): Numéro de l'étape courrante

* stepper.stepCount (integer, required): Nombre d'étapes

* stepper.nextStep (String, required): Titre de la prochaine étape

* stepper.markup (string, optional) : (défaut : h2) niveau de titre

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
 let stepper = locals.stepper || {};
 let classes = stepper.classes || [];
 const markup = stepper.markup || 'h2';

 let attributes = {};
 let stepAttrs = {};
 if (stepper.id) attributes.id = stepper.id;
 classes.push(prefix + '-stepper');
%>

<div <%- includeClasses(classes); %> <%- includeAttrs(attributes) %>>
  <% if (stepper.title !== undefined) { %>
    <<%= markup %> class="<%= prefix%>-stepper__title">
      <%- stepper.title %>
      <% if (stepper.currentStep && stepper.stepCount) { %>
        <span class="<%= prefix %>-stepper__state">Étape <%= stepper.currentStep %> sur <%= stepper.stepCount %></span>
      <% } %>
    </<%= markup %>>
  <% } %>



  <% if (stepper.currentStep && stepper.stepCount) { %>
    <% stepAttrs['data-' + prefix + '-current-step'] = stepper.currentStep %>
    <% stepAttrs['data-' + prefix + '-steps'] = stepper.stepCount %>
    <div class="<%= prefix%>-stepper__steps" <%- includeAttrs(stepAttrs) %>></div>
  <% } %>

  <% if (stepper.nextStep !== undefined) { %>
    <p class="<%= prefix %>-stepper__details"><span class="<%= prefix %>-text--bold">Étape suivante :</span> <%- stepper.nextStep %></p>
  <% } %>
</div>
`,Ea=[{names:["stepper"],partial:$a}],Ta=`<%#
# paramètres summary

* summary (array, required) : Paramètre summary
  ** summary.list (array, required) : Tableau de liens enfants (href, label)
  ** summary.title (String, required) : Titre du sommaire
  ** summary.markup (String, optional) : (default: h2) Niveau de titre

%>
<% eval(include('../../../../core/index.ejs')); %>
<% let summary = locals.summary || {};
const markup = summary.markup || 'h2'; %>

<nav class="<%= prefix %>-summary" role="navigation" aria-labelledby="<%= prefix %>-summary-title">
  <% if (summary.title) { %>
    <<%= markup %> class="<%= prefix %>-summary__title" id="<%= prefix %>-summary-title"><%- summary.title %></<%= markup %>>
  <% } %>
  <%- include('./summary-list.ejs', {summaryList: summary.list}); %>
</nav>
`,Sa=`<%#
# paramètres summary list

* summaryList (array, required) : Tableau de liens (href, label)
	** summaryList[].list (array, required) : Tableau de liens enfants (href, label)

%>
<% eval(include('../../../../core/index.ejs')); %>
<% let summaryList = locals.summaryList || []; %>
<ol>
  <% for (let i = 0; i < summaryList.length; i++) {
    const item = summaryList[i];
    if (!item.list) item.list = undefined;
  %>

  <%- include('./summary-item.ejs', {summaryItem: item}); %>
  <% } %>
</ol>
`,Ga=`<%#
# paramètres summary item

* summaryItem.href (string, required) : url ou ancre du lien

* summaryItem.label (string, required) : libellé du lien

* summaryItem.list (array, optional) : Tableau de liens enfants (href, label)

%>
<% eval(include('../../../../core/index.ejs')); %>
<% let summaryItem = locals.summaryItem || {};
  const linkAttrs = {};
  if (summaryItem.id) linkAttrs.id = summaryItem.id;
%>
<li>
  <a class="<%= prefix %>-summary__link" <%- includeAttrs(linkAttrs) %> href="<%- summaryItem.href %>"><%- summaryItem.label %></a>
  <% if (summaryItem.list) { %>
    <%- include('./summary-list.ejs', {summaryList: summaryItem.list}); %>
  <% } %>
</li>
`,Ma=[{names:["summary"],partial:Ta},{names:["summary-list"],partial:Sa},{names:["summary-item"],partial:Ga}],Da=`<%#
# paramètres Tab

* tab.id (string, required) : id du panel

* tab.isActive (bool, required) : défini le panel actif (1 max)

* tab.icon (string, optional) : nom de l'icone dans le bouton

* tab.label (string, required) : libellé du bouton

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let tab = locals.tab || {};
let btn = {
  attributes: {
    tabindex: tab.isActive ? '0' : '-1',
    role: 'tab',
    'aria-selected': tab.isActive === true,
    'aria-controls': tab.id + "-panel"
  },
  classes: [prefix + '-tabs__tab']
}

if (tab.icon !== undefined) {
  btn.classes.push(prefix + '-icon-' + tab.icon);
  btn.classes.push(prefix + '-tabs__tab--icon-left');
}
%>

<li role="presentation">
  <button type="button" id="<%= tab.id %>" <%- includeClasses(btn.classes) %> <%- includeAttrs(btn.attributes); %>><%= tab.label %></button>
</li>
`,za=`<%#
# paramètres Tab-panel

* tab.id (string, required) : id du panel

* tab.content (string, required) : contenu du panel

* tab.isActive (bool, required): défini le panel actif (1 max)

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let tab = locals.tab || {};
let classes = [prefix + '-tabs__panel']
if(tab.isActive) classes.push(prefix + '-tabs__panel--selected');
%>
<div id="<%= tab.id %>-panel" <%- includeClasses(classes) %> role="tabpanel" aria-labelledby="<%= tab.id %>" tabindex="0" >
  <%- tab.content %>
</div>`,Ba=`<%#
# paramètres Tabs

* tabs (array, required) : tableau de tab
  ** tabs.classes (array, optional): classes du composant
  ** tabs.attributes (object, optional): attributs du composant
  ** tabs.viewportWidth (boolean, optional): Si true, défini la taille du composant en full width (sans marge en mobile)

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let tabsGroup = locals.tabs || {tabs: []};
let tabs = tabsGroup.tabs;
let tabsClasses = tabs.classes || [];
let tabsAttrs = tabs.attributes || {};
let activeClass = '';
tabsClasses.push(prefix + '-tabs');

if (tabsGroup.viewportWidth) tabsClasses.push(prefix + '-tabs--viewport-width');

%>
<div <%- includeClasses(tabsClasses) %> <%- includeAttrs(tabsAttrs); %> >
  <ul class="<%= prefix + '-tabs__list' %>" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
    <% for (let i = 0; i < tabs.length; i++) { %>
      <%- include('./tab.ejs', {tab: {...tabs[i], isActive: i === 0}}); %>
    <% } %>
  </ul>
  <% for (let i = 0; i < tabs.length; i++) { %>
    <%- include('./tab-panel.ejs', {tab: {...tabs[i], isActive: i === 0}}); %>
  <% } %>
</div>
`,Fa=[{names:["tab"],partial:Da},{names:["tab-panel"],partial:za},{names:["tabs"],partial:Ba}],Na=`<%#
# paramètres Table wrapper

* wrapper.table (object, required) : contenu du tableau

* wrapper.noCaption (boolean, optional) : {default: false} cache le texte de la caption

* wrapper.noScroll (boolean, optional) : {default: false} désactive le scroll horizontal

* wrapper.captionBottom (boolean, optional) : {default: false} positionne la caption en bas

* wrapper.bordered (boolean, optional) : {default: false} si true, ajoute des séparateurs entre chaque ligne

* wrapper.classes (array, optional): classes supplémentaires du composant

* wrapper.attributes (object, optional): attributs supplémentaires du composant

* wrapper.size (string, optional): modificateur de taille des espacements
valeurs :
    ** sm : tableau espacements petits
    ** lg : tableau espacements larges

* wrapper.header (string, optional): contenu de l'en-tête du composant

* wrapper.footer (string, optional): contenu du pied de page du composant
%>

<% eval(include('../../../../core/index.ejs'));

let wrapper = locals.table || {};
let classes = wrapper.classes || [];

const attributes = wrapper.attributes || {};

const table = wrapper.table || [[]];
if (table.id) {
  attributes.id = table.id + '-component';
}

classes.push(prefix + '-table');

switch(wrapper.size) {
	case 'sm':
			classes.push(prefix + '-table--sm');
		break;
  case 'lg':
			classes.push(prefix + '-table--lg');
		break;
}

if (wrapper.noCaption) classes.push(prefix + '-table--no-caption');
if (wrapper.captionBottom) classes.push(prefix + '-table--caption-bottom');
if (wrapper.bordered) classes.push(prefix + '-table--bordered');
if (wrapper.noScroll) classes.push(prefix + '-table--no-scroll');
%>

<div <%- includeClasses(classes) %> <%- includeAttrs(attributes) %>>
  <% if (wrapper.header !== undefined) { %>
    <div class="<%= prefix %>-table__header"><%- wrapper.header %></div>
  <% } %>
  <% if (table !== undefined) { %>
    <div class="<%= prefix %>-table__wrapper">
      <div class="<%= prefix %>-table__container">
        <div class="<%= prefix %>-table__content">
          <%- include('./table.ejs', {table: table}); %>
        </div>
      </div>
    </div>
  <% } %>
  <% if (wrapper.footer !== undefined) { %>
    <div class="<%= prefix %>-table__footer"><%- wrapper.footer %></div>
  <% } %>
</div>
`,Oa=`<%#
# paramètres Table

* table.thead (array, required): tableau de données de l'en-tête du tableau

* table.tbodies (array, required): tableau de données du corps du tableau

* table.caption (string, required) : titre du tableau

* table.captionDetail (string, optional) : description précise du tableau

* table.id (string) : id du tableau

* table.classes (array, optional): classes supplémentaires du tableau

* table.attributes (object, optional): attributs supplémentaires du tableau
%>

<% eval(include('../../../../core/index.ejs'));

let table = locals.table || {};
let classes = table.classes || [];
const attributes = table.attributes || {};
attributes.id = table.id || uniqueId('-table');
%>

<table <%- includeClasses(classes) %> <%- includeAttrs(attributes) %>>
  <% if (table.caption !== undefined) { %>
    <caption>
      <%= table.caption %>
      <% if (table.captionDetail !== undefined) { %>
        <div class="<%= prefix %>-table__caption__desc"><%- table.captionDetail %></div>
      <% } %>
    </caption>
  <% } %>
  <% if (table.thead) { %>
    <%- include('./thead.ejs', {thead: table.thead}); %>
  <% } %>
  <% if (table.tbodies) { %>
    <% for (let index = 0; index < table.tbodies.length; index++) { %>
      <%- include('./tbody.ejs', {tbody: {table, index}}); %>
    <% } %>
  <% } %>
</table>
`,Ra=`<%#
# paramètres Thead

* thead (array, required): tableau de données de l'en-tête à deux dimensions [row][col]
  ** thead[row][col].content (string, required): contenu de la cellule
  ** thead[row][col].classes (array, optional): classes supplémentaires de la cellule
  ** thead[row][col].attributes (array, optional): attributs supplémentaires de la cellule
%>

<% eval(include('../../../../core/index.ejs'));

let thead = locals.thead || {};
%>

<thead>
  <% for (let row = 0; row < thead.length; row++) { %>
    <tr>
      <% if (thead[row] && thead[row].length) { %>
        <% for (let col = 0; col < thead[row].length; col++) { %>
          <%
            let colClasses = thead[row][col].classes || [];
            const colAttributes = thead[row][col].attributes || {};
          %>
          <th <%- includeClasses(colClasses) %> <%- includeAttrs(colAttributes) %>>
            <%- thead[row][col].content %>
          </th>
        <% } %>
      <% } %>
    </tr>
  <% } %>
</thead>
`,Va=`<%#
# paramètres Tbody

* tbody.table (object, required): contenu du tableau
  ** tbody.table.tbodies (array, required): tableau de données du tbody à trois dimensions [body][row][col]
    *** tbody.table.tbodies[body][row][col].content (string, required): contenu de la cellule
    *** tbody.table.tbodies[body][row][col].markup (string, optional): balise de la cellule (th, td)
    *** tbody.table.tbodies[body][row][col].classes (array, optional): classes supplémentaires de la cellule
    *** tbody.table.tbodies[body][row][col].attributes (array, optional): attributs supplémentaires de la cellule
%>

<% eval(include('../../../../core/index.ejs'));

const table = tbody.table || {};
const index = tbody.index || 0;
%>

<tbody>
  <% if (table.tbodies && table.tbodies[index]) { %>
    <% for (let row = 0; row < table.tbodies[index].length; row++) { %>
      <%
      const rowAttributes = {};
      rowAttributes.id = \`\${table.id}-row-key-\${row + 1}\`;
      rowAttributes['data-row-key'] = row + 1;
      %>
      <tr <%- includeAttrs(rowAttributes) %>>
        <% if (table.tbodies[index].length) { %>
          <% for (let col = 0; col < table.tbodies[index][row].length; col++) { %>
            <%
            const colMarkup = table.tbodies[index][row][col].markup || 'td';
            const colClasses = table.tbodies[index][row][col].classes || [];
            const colAttributes = table.tbodies[index][row][col].attributes || {};
            %>
            <<%- colMarkup %> <%- includeClasses(colClasses) %> <%- includeAttrs(colAttributes) %>>
              <%- table.tbodies[index][row][col].content %>
            </<%- colMarkup %>>
          <% } %>
        <% } %>
      </tr>
    <% } %>
  <% } %>
</tbody>
`,Wa=[{names:["table-wrapper"],partial:Na},{names:["table"],partial:Oa},{names:["thead"],partial:Ra},{names:["tbody"],partial:Va}],Ua=`<%#
# paramètres tag

* tag.id (string, optional) : id du tag

* tag.label (string, required) : contenu texte

* tag.href (string, required) : adresse url du lien

* tag.blank (bool, optional) : si true, target prend la valeur _blank, sinon _self

* tag.title (string, optional) : attribut title du tag

* tag.disabled (boolean, optional) : si true, composant désactivé

* tag.type (string, optional) : type de tag
  valeurs {default: non cliquable} :
  * clickable : tag avec lien
  * pressable : tag activable
  * dismissible : tag supprimable

* tag.pressable (bool, optional) : si true, rend sélectionnable le composant

* tag.dismissible (bool, optional) : si true, rend supprimable le composant

* tag.button (boolean, optional) : si true, le composant est un bouton

* tag.size (string, optional) : taille du composant
  valeurs {default: md} :
  * sm : tag taille small

* tag.icon (string, optional) : icon du lien

* tag.accent (string, optional) : couleur d'accentuation

* tag.classes (array, optional) : Classes suplémentaires sur le bouton

* tag.attributes (object, optional) : Attributs suplémentaires sur le tag
%>
<% eval(include('../../../../core/index.ejs')); %>


<%
let tag = locals.tag || {};
let tagClasses = tag.classes || [];
let tagAttrs = tag.attributes || {};
tagAttrs.id = tag.id || undefined;
tagAttrs.title = tag.title || undefined;
tagClasses.push(prefix + '-tag');

if (tag.accent !== undefined) tagClasses.push(prefix + '-tag--' + tag.accent);

switch(tag.size) {
  case 'sm':
    tagClasses.push(prefix + '-tag--sm');
  break;
}

switch(tag.type) {
  case 'clickable':
    tag.markup = 'a';
    if (tag.disabled !== true) {
      tagAttrs.href = tag.href || contentPlaceholder('url');
      switch (true) {
        case tag.self:
          tagAttrs.target = '_self';
        break;
      }
    }
  break;
  case 'pressable':
    tag.markup = 'button';
    tagAttrs.type = 'button';
    tagAttrs["aria-pressed"] = tag.pressed === true ? 'true' : 'false';
  break;
  case 'dismissible':
    tag.markup = 'button';
    tagAttrs.type = 'button';
    tagClasses.push(prefix + '-tag--dismiss');
    tagAttrs["aria-label"] = 'Retirer ' + contentPlaceholder('le filtre ' + tag.label);
  break;
  default:
    tag.markup = 'p';
  break;
}

if (tag.icon !== undefined) {
  tagClasses.push(prefix + '-icon-' + tag.icon);
  tagClasses.push(prefix + '-tag--icon-left');
}

if (tag.disabled === true) {
  switch(tag.markup) {
  case 'input':
  case 'button':
    tagAttrs.disabled = '';
    break;

  case 'a':
    tagAttrs['aria-disabled'] = 'true';
    tagAttrs.role = 'link';
    break;
  }
}

tagAttrs = {...tagAttrs, ...tag.attributes}; // place les attributs venant du sample à la fin
%>

<<%= tag.markup %> <%- includeClasses(tagClasses)%> <%- includeAttrs(tagAttrs); %>><%- tag.label %></<%= tag.markup %>>
`,Ja=`<%#
# paramètres groupe de tags

* tagsGroup.tags (array, required): paramètres spécifique de chaque tag du groupe

* tagsGroup.size (string, optional) : définie la taille des tags dans le groupe (default md)
  * sm : Tags taille sm

* tagsGroup.groupMarkup (string, optional) : Type de balise pour le groupe de tags (default ul)

* tagsGroup.classes (array, optionnal) : Classes suplémentaires sur le groupe de tags

* tagsGroup.attributes (object, optionnal) : Attributs suplémentaires sur le groupe de tags

#%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const tagsGroup = locals.tagsGroup || {};
let groupClasses = tagsGroup.classes || [];
let groupAttrs = tagsGroup.attributes || {};
let tags = tagsGroup.tags || [];
const groupMarkup = tagsGroup.groupMarkup || 'ul';
const isList = groupMarkup === 'ul';
groupClasses.push(prefix + '-tags-group');

switch(tagsGroup.size) {
  case 'sm':
    groupClasses.push(prefix + '-tags-group--sm');
    break;
 }
 %>

<<%= groupMarkup %> <%- includeClasses(groupClasses) %> <%- includeAttrs(groupAttrs) %>>
<% for (let i = 0; i < tags.length; i++) { %>
  <% if (isList) { %>
    <li>
  <% } %>

  <%- include('./tag.ejs', { tag: tags[i] }); %>

  <% if (isList) { %>
    </li>
  <% } %>
<% } %>
</<%= groupMarkup %>>
`,Ha=[{names:["tag"],partial:Ua},{names:["tags-group"],partial:Ja}],Xa=`<%#
# paramètres tile

* tile.markup (string, optional) : (default: h3) Niveau de titre de la tuile

* tile.enlarge (boolean, optional) : si true, agrandi la zone de clic à toute la tuile

* tile.download (boolean, optional) : si true, passe la tuile en mode téléchargement

* tile.size (string, optionnal) : Taille de la tuile ("md" - default | "sm").

* tile.horizontal (boolean, optional) : si true, passe la tuile en mode horizontal

* tile.vertical (string, optional) : si true, valeur de breakpoint du passage en mode vertical

* tile.id (string, optional) : id de l'élément

* tile.variations (array, optional) : variations de la tuile (valeurs : grey, no-border, no-background, shadow)

* tile.content (object, optional) : Paramètres du contenu de la tuile

* tile.icon (boolean, optional) : Si false, ajoute la classe fr-tile--no-icon pour désactiver l'icone associée au lien

* tile.attributes (object, optional) : attributs de la tuile

* tile.classes (array, optional) : Classes suplémentaires sur la tuile

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let tile = locals.tile || {};
const content = tile.content || {};
let classes = tile.classes || [];
const attributes = tile.attributes || {};
attributes.id = tile.id || uniqueId('tile');
const markup = tile.markup || 'h3';
classes.push(\`\${prefix}-tile\`);

switch (tile.size) {
  case 'sm':
    classes.push(\`\${prefix}-tile--sm\`);
    break;
}

switch (tile.horizontal) {
  case true:
    classes.push(\`\${prefix}-tile--horizontal\`);
    break;
}

switch (tile.vertical) {
  case true:
    classes.push(\`\${prefix}-tile--vertical\`);
    break;

  case 'md':
    classes.push(\`\${prefix}-tile--vertical@md\`);
    break;

  case 'lg':
    classes.push(\`\${prefix}-tile--vertical@lg\`);
    break;
}

if (tile.variations) for (const variation of tile.variations) switch(variation) {
  case 'grey':
    classes.push(\`\${prefix}-tile--grey\`);
    break;

  case 'no-border':
    classes.push(\`\${prefix}-tile--no-border\`);
    break;

  case 'no-background':
    classes.push(\`\${prefix}-tile--no-background\`);
    break;

  case 'shadow':
    classes.push(\`\${prefix}-tile--shadow\`);
    break;
}

if (tile.download) {
  classes.push(\`\${prefix}-tile--download\`);
  tile.content.downloadable = true;
};

if (tile.icon === false) classes.push(\`\${prefix}-tile--no-icon\`);

if (tile.enlarge) switch (tile.content.actionMarkup) {
  case 'button':
    classes.push(\`\${prefix}-enlarge-button\`);
    break;

  default:
    classes.push(\`\${prefix}-enlarge-link\`);
}
%>

<div <%- includeClasses(classes)%> <%- includeAttrs(attributes) %>>

  <div class="<%= prefix %>-tile__body" >
    <%- include('tile-content.ejs', { content: tile.content }) %>
  </div>

  <% if (tile.header !== undefined) { %>
    <%- include('tile-header.ejs', { header: tile.header }) %>
  <% } %>
</div>
`,Qa=`<%#
# paramètres du contenu principal de la carte

* content.title (string, required) : Titre de la carte

* content.description (string, optional) : Description

* content.badgesGroup (array, optional) : Groupe de badges (voir badge)

* content.tagsGroup (array, optional) : Groupe de tags (voir tag)

* content.details (array, optional) : Détails

* content.markup (string, optional) : (défaut : h3) niveau de titre

* content.blank (boolean, optional) : Ajoute l'attribut target="_blank" pour ouvrir le lien dans une nouvelle fenêtre, nécessite l'ajout d'un attribut title "intitulé - nouvelle fenêtre"

* content.downloadable (boolean || string, optional) : Ajoute l'attribut download au lien, si string, ajoute la valeur comme nom de fichier

* content.lang (string, optional) : Ajoute l'attribut hreflang au lien, pour définir la langue du document lié

* content.disabled (boolean, optional) : Si true, retire le href du lien pour le désactiver

* content.assess (String, optional): Si true, remplissage automatique du poid et type de fichier à telecharger

* content.noLink (boolean, optional) : Présence du lien

* content.attributes (object, optional) : Attributs à ajouter au lien

* content.actionMarkup (string, optional) : balise de l'actionneur du composant (a, button)

* content.actionTitle (string, optional) : Attribut title de l'actionneur

* content.actionType (string, optional) : Attribut type de l'actionneur

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
let start = {};

const markup = content.markup || 'h3';
const actionMarkup = content.actionMarkup || 'a';
const href = content.href || '#';
const attributes = content.attributes || {};
const hasLink = !content.noLink;

if (content.actionTitle) attributes.title = content.actionTitle;

if (actionMarkup === 'button') attributes.type = content.actionType || actionMarkup;

switch (actionMarkup) {
  case 'a':
    if (content.rel) attributes.rel = content.rel;
    if (content.lang) attributes.hreflang = content.lang;
    if (content.assess === true) {
        attributes[\`data-\${prefix}-assess-file\`] = ''
    } else if (typeof(content.assess) === 'string') {
        attributes[\`data-\${prefix}-assess-file\`] = content.assess
    }
    break;
}

if (content.downloadable === true && actionMarkup === 'a') attributes.download = '';
if (typeof(content.downloadable) === 'string') attributes.download = content.downloadable;

if (content.badgesGroup) start.badgesGroup = content.badgesGroup;
if (content.tagsGroup) start.tagsGroup = content.tagsGroup;
if (content.tag) start.tag = content.tag;
if (content.badge) start.badge = content.badge;

%>

<div class="<%= prefix %>-tile__content">
  <<%= markup %> class="<%= prefix %>-tile__title">
    <% if (hasLink) { %>
      <%- include('../../../../core/template/ejs/action/action.ejs', {action: {...content, attributes, markup: actionMarkup, label: content.title, disabled: content.disabled}}) %>
    <% } else { %>
        <%- content.title %>
    <% } %>
  </<%= markup %>>

  <% if (content.description !== undefined) { %>
    <p class="<%= prefix %>-tile__desc"><%- content.description %></p>
  <% } %>

  <% if (content.details !== undefined) { %>
    <%- include('tile-details.ejs', { details: content.details }); %>
  <% } %>

  <% if (Object.keys(start).length) { %>
    <%- include('tile-start.ejs', {start: start }); %>
  <% } %>
</div>
`,Za=`<%#
# paramètres des détails de la tuile

* details (array, required) : collection d'objet définissant les détails

* details[].label (string, required) : Intitulé du détail

* icon (string, optionnal) : nom de l'icon

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
  const detailClasses = [\`\${prefix}-tile__detail\`];
%>
<p <%- includeClasses(detailClasses); %>><%- details %></p>
`,Ka=`<%#
# paramètres de la partie end du contenu principal de la tuile, placé après titre et description

* end.details (array, optional) : Détails

%>
<% eval(include('../../../../core/index.ejs')); %>

<div class="<%= prefix %>-tile__end" >
    <% if (end.details !== undefined) { %>
        <%- include('tile-details', { details: end.details }); %>
    <% } %>
</div>
`,Ya=`<%#
# paramètres de l'en-tête de la tuile

* header.pictogram (object, optional) : paramètres du pictogram

%>
<% eval(include('../../../../core/index.ejs')); %>

<div class="<%= prefix%>-tile__header" >
  <% if (header.pictogram) { %>
    <div class="<%= prefix %>-tile__pictogram">
      <%- include('../../../../core/template/ejs/artwork/pictogram.ejs', {pictogram: header.pictogram}); %>
    </div>
  <% } %>
</div>
`,ei=`<%#
# paramètres de la partie start du contenu principal de la carte, placés avant titre et description

* start.badgesGroup (object, optional) : Groupe de badges (voir badge)

* start.tagsGroup (object, optional) : Groupe de tags (voir tag)

* start.tag (object, optional) : tag seul (voir tag)

* start.badge (object, optional) : badge seul (voir tag)

%>
<% eval(include('../../../../core/index.ejs')); %>

<div class="<%= prefix %>-tile__start" >

    <% if (start.badge) { %>
        <%- include('../../../badge/template/ejs/badge.ejs', {badge: start.badge }); %>
    <% } %>

    <% if (start.tag) { %>
        <%- include('../../../tag/template/ejs/tag.ejs', {tag: start.tag }); %>
    <% } %>

</div>
`,ni=[{names:["tile"],partial:Xa},{names:["tile-content"],partial:Qa},{names:["tile-details"],partial:Za},{names:["tile-end"],partial:Ka},{names:["tile-header"],partial:Ya},{names:["tile-start"],partial:ei}],ti=`<%#
# paramètres toggle

* toggle.id (string, required): id de l'input

* toggle.groupId (string, optional): id du groupe

* toggle.label (string, required): libellé du toggle

* toggle.hint (string, optional): texte additionel

* toggle.border (boolean, optional): ajoute une bordure sous le toggle

* toggle.left (boolean, optional): place le libellé sur la gauche

* toggle.state (boolean, optional): ajoute les libellés "activé"/"désactivé" sous le champ

* toggle.disabled (boolean, optional): désactive le toggle

* toggle.checked (boolean, optional): coche le toggle

* toggle.inputAttr (object, optional): attributs supplémentaires sur l'input du toggle

* toggle.classes (array, optional): classes supplémentaires sur le toggle

// TODO: templatisation

%>
<% eval(include('../../../../core/index.ejs')); %>
<% eval(include('../../../form/template/ejs/message/builder.js.ejs')); %>

<%
let toggle = locals.toggle || {};
const id = toggle.id || uniqueId('toggle');
let classes = toggle.classes || [];

let inputAttr = toggle.inputAttr || {};
inputAttr.id = id;

const groupAttr = toggle.groupAttr || {};
groupAttr.id = toggle.groupId ? toggle.groupId + inputAttr.id  : undefined;

const describedby = [];

const hintAttr = toggle.hintAttr || {};

if (toggle.hint) {
  const hintId = toggle.hintId || uniqueId('toggle-hint');
  hintAttr.id = hintId;
  describedby.push(hintId);
}

classes.push(prefix + '-toggle');

if (toggle.border) {
  classes.push(prefix +'-toggle--border-bottom');
}
if (toggle.left) {
  classes.push(prefix +'-toggle--label-left');
}
if (toggle.error) {
  classes.push(prefix +'-toggle--error');
}
if (toggle.valid) {
  classes.push(prefix +'-toggle--valid');
}
if (toggle.disabled) inputAttr['disabled'] = '';
if (toggle.checked) inputAttr['checked'] = '';

const builder = new MessageBuilder(toggle.id, toggle.includeEmptyMessagesGroup);

if (toggle.valid) {
    builder.addValid(toggle.valid);
}
if (toggle.error) {
    builder.addError(toggle.error);
}

if (builder.isIncluded) describedby.push(...builder.ids);

if (describedby.length > 0) inputAttr['aria-describedby'] = describedby.join(' ');
%>

<div <%- includeClasses(classes)%> <%- includeAttrs(groupAttr)%>>
  <input type="checkbox" class="<%= prefix %>-toggle__input" <%- includeAttrs(inputAttr)%>>
  <label class="<%= prefix %>-toggle__label" for="<%= toggle.id %>" <% if(toggle.state){ %> data-<%= prefix %>-checked-label="Activé" data-<%= prefix %>-unchecked-label="Désactivé" <% } %>><%- toggle.label %></label>
  <% if (toggle.hint){ %>
    <p class="<%= prefix %>-hint-text" <%- includeAttrs(hintAttr)%>><%- toggle.hint %></p>
  <% } %>
  <%- include('../../../form/template/ejs/message/messages-group', { messagesGroup: builder.messagesGroup }); %>
</div>
`,ai=`<%#
# paramètres toggle group

* toggle.hint (string, optional): texte additionel

// TODO: templatisation

%>
<% eval(include('../../../../core/index.ejs')); %>

<%
  let toggle = locals.toggle || {};
  const toggles = toggle.toggles || [];
  if (!toggles.length) {
    const id = uniqueId('toggle');
    for (let i = 0; i < 5; i++) {
      toggles.push({ ...toggle, id: id + i });
    }
  }
%>

<ul class="<%= prefix %>-toggle__list">
  <%
    for (let i = 0; i < toggles.length; i++) {
  %>
    <li>
        <%- include('./toggle.ejs', {toggle: toggles[i]} ); %>
    </li>
  <% } %>
</ul>
`,ii=[{names:["toggle"],partial:ti},{names:["toggle-group"],partial:ai}],si=`<%#
# paramètres header translate

* translate (object, optional) : Paramètres du sélecteur de langue
  ** translate.id (string) : id de l'élément
  ** translate.button (object, optional) : Paramètres du bouton du sélecteur de langue (ex: {kind:3} pour un btn tertiary)
  ** translate.collapseId (string, required) : Id du menu à controler
  ** translate.languages (array, required) : Tableau d'objets langues
    *** translate.languages[].name (string, required) : Nom de la langue dans son alphabet
    *** translate.languages[].locale (string, required) : Code de la langue en 2 caratères
    *** translate.languages[].active (boolean, required) : La langue qui apparait dans le bouton et en style active dans la liste (1 seule langue active)
%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const translate = locals.translate || {};
const attributes = translate.attributes || {};
attributes.id = translate.id || uniqueId('translate');
const collapseId = translate.collapseId || uniqueId('translate');
%>

<nav role="navigation" class="<%= prefix %>-translate <%= prefix %>-nav" <%- includeAttrs(attributes) %>>
  <div class="<%= prefix %>-nav__item">
    <%
    const translateBtn = translate.button || {};
    if (translate.languages.length) {
      const activeLanguage = translate.languages.find(lang => lang.active === true);
      translateBtn.label = activeLanguage.locale.toUpperCase() + \`<span class="\${prefix}-hidden-lg">&nbsp;- \` + activeLanguage.name + '</span>';
    }
    const minBtnClasses = [\`\${prefix}-translate__btn\`];
    const minBtnAttrs = {
      'aria-controls': collapseId,
      'aria-expanded': false,
      title: translateBtn.title
    };
    translateBtn.classes = translateBtn.classes !== undefined ? translateBtn.classes.concat(minBtnClasses) : minBtnClasses;
    translateBtn.attributes = translateBtn.attributes !== undefined ? {...minBtnAttrs, ...translateBtn.attributes} : minBtnAttrs;
    %>

    <%- include('../../../button/template/ejs/button', {button:translateBtn}); %>

    <% if (translate.languages.length) { %>
      <div class="<%= prefix %>-collapse <%= prefix %>-translate__menu <%= prefix %>-menu" id="<%= collapseId %>">
          <%- include('languages.ejs', {languages: translate.languages}) %>
      </div>
    <% } %>
  </div>
</nav>`,ri=`<%#
# paramètres translate Languages

* languages (array, required) : Tableau d'objets langues
  ** languages[].id (string) : id de l'élément
  ** languages[].name (string, required) : Nom de la langue dans son alphabet
  ** languages[].locale (string, required) : Code de la langue en 2 caratères
  ** languages[].active (boolean, required) : La langue qui apparait dans le bouton et en style active dans la liste (1 seule langue active)
%>
<% eval(include('../../../../core/index.ejs')); %>

<%
const languages = locals.languages || {};
%>

<ul class="<%= prefix %>-menu__list">
  <%
  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i];
    const attrs = {
      href: lang.href || '#',
      id: lang.id || uniqueId('language')
    };
    if (lang.active) attrs['aria-current'] = true;
  %>
    <li>
      <a class="<%= prefix %>-translate__language <%= prefix %>-nav__link" hreflang="<%- lang.locale %>" lang="<%- lang.locale %>" <%- includeAttrs(attrs); %> ><%= [lang.locale.toUpperCase(), lang.name].join(' - '); %></a>
    </li>
  <% } %>
</ul>`,li=[{names:["translate"],partial:si},{names:["languages"],partial:ri}],oi=`<%#
# paramètres tooltip

* tooltip.id (string, required) : Identifiant du composant (lie le bouton au collapse).

* tooltip.content (string, optional) : contenu du composant

#%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const tooltip = locals.tooltip || {};
%>

<span class="<%= prefix %>-tooltip <%= prefix %>-placement" id="<%= tooltip.id %>" role="tooltip"><%- tooltip.content %></span>
`,di=[{names:["tooltip"],partial:oi}],ci=`<%#
# paramètres transcription

* transcription.id (string, required) : Identifiant du composant (lie le bouton au collapse).

* transcription.title (string, optional) : titre de la modale de transcription.

* transcription.content (string, optional) : contenu de la transcription.

* transcription.isExpanded (boolean, optional) [default: false] : le composant est-il ouvert au départ.

* transcription.modalId (string, optional) : id de la modale de transcription.

* transcription.fullscreen (string, optional) : libellé du bouton de plein écran.

* transcription.fullscreenAriaLabel (string, optional) : libellé de l'attribut aria-label du bouton de plein écran.

* transcription.attributes (object, optional) : attributs supplémentaires sur le composant.

#%>

<% eval(include('../../../../core/index.ejs')); %>

<%
const transcription = locals.transcription || {};
const attributes = transcription.attributes || {};
const isExpanded = transcription.isExpanded === true;
const title = locals.getText('collapse.title', 'transcription');

if (transcription.id) attributes.id = transcription.id;

let modal = {
  tag: 'div',
  title: transcription.title,
  body: transcription.content,
  id: transcription.modalId || uniqueId('modal-transcription'),
  size: 'lg'
}
let modalId = prefix + '-transcription-modal-' + transcription.id;
let collapseId = prefix + '-transcription-collapse-' + transcription.id;
%>

<div class="<%= prefix %>-transcription" <%- includeAttrs(attributes) %>>
  <button type="button" class="<%= prefix %>-transcription__btn" aria-expanded="<%= isExpanded %>" aria-controls="<%= collapseId %>"><%= title %></button>
  <div class="<%= prefix %>-collapse" id="<%= collapseId %>">
    <div class="<%= prefix %>-transcription__footer">
      <div class="<%= prefix %>-transcription__actions-group">
        <%- include('../../../button/template/ejs/button.ejs', { button: {label: transcription.fullscreen, classes: [prefix + '-btn--fullscreen'], attributes: {'aria-controls': modalId, 'aria-label': transcription.fullscreenAriaLabel, 'data-fr-opened': false} } } ); %>
      </div>
    </div>
    <%- include('../../../modal/template/ejs/modal.ejs', {modal: { ...modal, id: modalId }}) %>
  </div>
</div>
`,ui=[{names:["transcription"],partial:ci}],pi=`<%#
# paramètres upload

* upload.id (string, required) : id de l'upload

* upload.name (string, required) : nom de l'input

* upload.label (string, required) : texte du label

* upload.hint (string, optional) : texte de description sous le label

* upload.labelAttrs (object, optional) : Pour passer des attributs au label

* upload.labelClasses (array, optional) : Pour passer des classes au label

* upload.attributes (array, optional) : Pour passer des attributs au input

* upload.error (string, optional) : ajoute un texte d'erreur

* upload.valid (string, optional) : ajoute un texte de succès

* upload.success (string, optional) : ajoute un texte de succès

* upload.multiple (boolean, optional) : Active la selection multiple de fichiers [defaut: false]

* upload.disabled (boolean, optional) : Permet de désactiver le champ [defaut: false]

%>
<% eval(include('../../../../core/index.ejs')); %>
<% eval(include('../../../form/template/ejs/message/builder.js.ejs')); %>
<%
const upload = locals.upload || {};
const groupAttributes = upload.attributes || {};
const classes = [prefix + '-upload'];
const groupClasses = [prefix + '-upload-group'];
const attributes = upload.attributes || [];
const labelAttrs = upload.labelAttrs || {};
const labelClass = upload.labelClasses || [];
const builder = new MessageBuilder(upload.id);
groupAttributes.id = upload.groupId || undefined;

if (upload.valid) {
  groupClasses.push(\`\${prefix}-upload-group--valid\`);
  builder.addValid(upload.valid);
}
if (upload.error) {
  groupClasses.push(\`\${prefix}-upload-group--error\`);
  builder.addError(upload.error);
}
if (upload.disabled) {
  groupClasses.push(\`\${prefix}-upload-group--disabled\`);
  attributes['disabled'] = '';
}
if (builder.describedby.length > 0) attributes['aria-describedby'] = builder.describedby.join(' ');
if (upload.multiple) attributes['multiple'] = '';
%>

<div <%- includeClasses(groupClasses); %> <%- includeAttrs(groupAttributes); %>>
  <%- include('../../../form/template/ejs/label', {label : {label: upload.label, hint: upload.hint, for: upload.id, attributes: labelAttrs}}); %>
  <input <%- includeClasses(classes); %> <%- includeAttrs(attributes); %> type="file" id="<%= upload.id %>" name="<%= upload.name %>">
  <%- include('../../../form/template/ejs/message/messages-group', { messagesGroup: builder.messagesGroup }); %>
</div>
`,mi=[{names:["upload"],partial:pi}],d=new vn;_n.forEach(({names:a,partial:n})=>d.add(a,n));In.forEach(({names:a,partial:n})=>d.add(a,n));Ln.forEach(({names:a,partial:n})=>d.add(a,n));Tn.forEach(({names:a,partial:n})=>d.add(a,n));Gn.forEach(({names:a,partial:n})=>d.add(a,n));Fn.forEach(({names:a,partial:n})=>d.add(a,n));On.forEach(({names:a,partial:n})=>d.add(a,n));Qn.forEach(({names:a,partial:n})=>d.add(a,n));Yn.forEach(({names:a,partial:n})=>d.add(a,n));nt.forEach(({names:a,partial:n})=>d.add(a,n));st.forEach(({names:a,partial:n})=>d.add(a,n));lt.forEach(({names:a,partial:n})=>d.add(a,n));ut.forEach(({names:a,partial:n})=>d.add(a,n));vt.forEach(({names:a,partial:n})=>d.add(a,n));qt.forEach(({names:a,partial:n})=>d.add(a,n));St.forEach(({names:a,partial:n})=>d.add(a,n));Mt.forEach(({names:a,partial:n})=>d.add(a,n));Bt.forEach(({names:a,partial:n})=>d.add(a,n));Ot.forEach(({names:a,partial:n})=>d.add(a,n));Vt.forEach(({names:a,partial:n})=>d.add(a,n));Jt.forEach(({names:a,partial:n})=>d.add(a,n));ea.forEach(({names:a,partial:n})=>d.add(a,n));ta.forEach(({names:a,partial:n})=>d.add(a,n));sa.forEach(({names:a,partial:n})=>d.add(a,n));la.forEach(({names:a,partial:n})=>d.add(a,n));da.forEach(({names:a,partial:n})=>d.add(a,n));pa.forEach(({names:a,partial:n})=>d.add(a,n));xa.forEach(({names:a,partial:n})=>d.add(a,n));ba.forEach(({names:a,partial:n})=>d.add(a,n));ha.forEach(({names:a,partial:n})=>d.add(a,n));ja.forEach(({names:a,partial:n})=>d.add(a,n));Ca.forEach(({names:a,partial:n})=>d.add(a,n));Ia.forEach(({names:a,partial:n})=>d.add(a,n));La.forEach(({names:a,partial:n})=>d.add(a,n));Ea.forEach(({names:a,partial:n})=>d.add(a,n));Ma.forEach(({names:a,partial:n})=>d.add(a,n));Fa.forEach(({names:a,partial:n})=>d.add(a,n));Wa.forEach(({names:a,partial:n})=>d.add(a,n));Ha.forEach(({names:a,partial:n})=>d.add(a,n));ni.forEach(({names:a,partial:n})=>d.add(a,n));ii.forEach(({names:a,partial:n})=>d.add(a,n));li.forEach(({names:a,partial:n})=>d.add(a,n));di.forEach(({names:a,partial:n})=>d.add(a,n));ui.forEach(({names:a,partial:n})=>d.add(a,n));mi.forEach(({names:a,partial:n})=>d.add(a,n));export{d as e,gn as u};
