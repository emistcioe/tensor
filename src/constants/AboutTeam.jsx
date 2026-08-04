// importing multiple images from a directory dynamically
const nameFile = (r) => {  // r is object Datatype with key being file name in './name.jpg' format and value being reference to that image
  let images = {}; // creating empty images object Datatype
  r.keys().forEach((key) => {
    const name = key.replace('./', '').split('.')[0]; // removes './' and file extension
    images[name] = r(key); // r(key) returns actual reference to the image
  });
  return images;
};
const images = nameFile(require.context('../images/members', false, /\.(png|jpe?g|svg)$/));

const CurrentTeam = [
    {
        Image: images['Sandesh'],
        Name: "Sandesh Kandel",
        Role: "Co-ordinator",
        facebook: "https://www.facebook.com/Anonymous.702/",
        instagram: "https://www.instagram.com/sandesh_kandel121/",
        github: "",
        linkedin: "https://www.linkedin.com/in/sandesh-kandel-1355bb351/"
    },
   {
        Image: images['Samiksha'],
        Name: "Samiksha Dhakal",
        Role: "Secretary",
        facebook: "https://www.facebook.com/sameeksha13",
        instagram: "https://www.instagram.com/_sameekshadhakal",
        github: "https://www.github.com/sameekshadhakal",
        linkedin: "https://www.linkedin.com/in/samiksha-dhakal"
    },
    {
        Image: images['Pooja'],
        Name: "Pooja Adhikari",
        Role: "Joint Secretary",
        facebook: "https://www.facebook.com/profile.php?id=61579844224818",
        instagram: "https://www.instagram.com/poojaadhikari113?igsh=bGY1NmdjMjF6N3g5",
        github: "https://github.com/pooja30-ux",
        linkedin: "https://www.linkedin.com/in/pooja-adhikari-531290342/"
    },
    
     {
        Image: images['Simonee'],
        Name: "Simonee Bajagain",
        Role: "Lead Marketing Associate",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
   {
        Image: images['Prince'],
        Name: "Prince Kumar Shah",
        Role: "Software Co-ordinator",
        facebook: "https://www.facebook.com/prince.shah.497336",
        instagram: "",
        github: "https://github.com/PrinceShah-alt",
        linkedin: ""
    },
   {
        Image: images['Bipin'],
        Name: "Bipin Shrestha",
        Role: "Lead Graphics Designer",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },

    {
        Image: images['dev1'],
        Name: "Dev Chandra Adhikari",
        Role: "Research Advocate",
        facebook: "https://www.facebook.com/adkdev200",
        instagram: "https://www.instagram.com/adkdev200/",
        github: "https://github.com/adkdev200-",
        linkedin: "https://www.linkedin.com/in/dev-adhikari-a9b737382/"
    },
    {
        Image: images['Alok'],
        Name: "Alok Sharma",
        Role: "Research Advocate",
        facebook: "https://www.facebook.com/alok.sharma.654054",
        instagram: "https://www.instagram.com/alok_9898?igsh=MzZ3c2V1aG9mZ3Q5",
        github: "https://github.com/alok-9898",
        linkedin: "https://www.linkedin.com/in/alok-sharma-32576a353/"
    },
   
    {
        Image: images['Muhammad'],
        Name: "Sheikh Muhammad Samir Hoda ",
        Role: "Research Advocate",
        facebook: "https://www.facebook.com/cr.sameer.16",
        instagram: "https://www.instagram.com/cr.sameer.16?igsh=M2Z5d2J3eHk0ZnBx",
        github: "https://github.com/sheikhsamir123",
        linkedin: "https://www.linkedin.com/in/samir-hoda-618827375?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
        Image: images['Shikshit'],
        Name: "Shikshit Bhattarai",
        Role: "Research Advocate",
        facebook: "https://www.facebook.com/overlord.bhai",
        instagram: "https://www.instagram.com/shik_xeet/",
        github: "https://github.com/shikxeet",
        linkedin: "https://www.linkedin.com/in/shikshit-bhattarai-0a053328a/"
    },
    {
        Image: images['Shivam'],
        Name: "Shivam Kumar Sah",
        Role: "Activity Coordinator",
        facebook: "https://www.facebook.com/shivam.kumar.sah.581112",
        instagram: "https://www.instagram.com/shivamsah05?igsh=MTgyMGpjcjFpaTk5aQ==",
        github: "https://github.com/Shivam-sah304",
        linkedin: "https://www.linkedin.com/in/shivam-kumar-sah-947296339"
    },
    
    {
        Image: images['Sandip'],
        Name: "Sandip Dhakal",
        Role: "Social Media Manager",
        facebook: "",
        instagram: "",
        github: "",
        linkedin: ""
    },
    

    {
        Image: images['Subigya'],
        Name: "Subigya Tripathi",
        Role: "Marketing Associate",
        facebook: "https://www.facebook.com/subigya.tripathi/",
        instagram: "https://www.instagram.com/subigya1124/?__pwa=1",
        github: "https://github.com/subcomp24",
        linkedin: "http://www.linkedin.com/in/subigya-tripathi-ba278b3ab"

    },
    {
        Image:images['Bani'],
        Name:"Bani Karki",
        Role:"Grphics Designer",
        facebook:"https://www.facebook.com/vani.karki0.0.0",
        instagram:"https://www.instagram.com/bani0_0_0?igsh=dGtvOXUxejRmd2w3&utm_source=qr",
        github:"https://github.com/bani00000",
        linkedin:"https://np.linkedin.com/in/bani-karki-234287371",
    },
    {
       Image: images['Jay'],
       Name: "Jay Sapkota",
       Role: "Junior Research Advocate",
       facebook: "https://www.facebook.com/ankit.sapkota.1297",
       instagram: "https://www.instagram.com/_ankit_sapkota?igsh=MThmbmYyeWllYnN4dg==",
       github: "https://github.com/jayadharmasapkota",
       linkedin: ""
    },
    {
        Image: images['Prakash'],
        Name: "Prakash Kumar Badaila",
        Role: "Junior Research Advocate",
        facebook: "https://www.facebook.com/profile.php?id=61585861833066",
        instagram: "https://www.instagram.com/prakashbadaila/",
        github: "https://github.com/Prakash-Kumar-Badaila",
        linkedin: "https://www.linkedin.com/in/prakash-badaila-007b55351/"
    },


    {
        Image: images['Rakhi'],
        Name: "Rakhi Jha",
        Role: "Junior Research Advocate",
        facebook: "https://www.facebook.com/rakhi.zha.2025",
        instagram: "https://www.instagram.com/rakh_ijha3?igsh=NzNvYW50YnVxMHV6",
        github: "https://github.com/rakhi-bit",
        linkedin: "https://www.linkedin.com/in/rakhi-jha-94a042425/"
    },
    {
       Image: images['Shova'],
       Name: "Shova Regmi",
       Role: "Junior Research Advocate",
       facebook: "https://www.facebook.com/profile.php?id=61584568916358",
       instagram: "https://www.instagram.com/shova.999?igsh=MWI2cDVmenh5OHdkdg==",
       github: "https://github.com/sRegmi99",
       linkedin: "http://www.linkedin.com/shova-regmi-bagale-90a89740b"
    },
    
    {
        Image: images['Subash'],
        Name: "Subash Shrestha",
        Role: "Junior Research Advocate",
        facebook: "https://www.facebook.com/subash.shrestha.2438",
        instagram: "https://www.instagram.com/subash_stha063/",
        github: "https://github.com/subashrestha063/subashrestha063",
        linkedin: "https://www.linkedin.com/in/subash-shrestha-963a32218/"
    },
    
]

export default CurrentTeam;