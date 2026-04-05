import abacus1 from './assets/abacus1.jpg';
import abacus2 from './assets/abacus2.png';
import abacus3 from './assets/abacus3.png';


// Gallery Images
import mehandi_main from './assets/gallery/mehandi/mehandi-hero.jpg';
import mehandi_detail1 from './assets/gallery/mehandi/image40.jpeg';
import aari_main from './assets/gallery/aari/image43.jpeg';
import kuch_main from './assets/gallery/aari/image41.jpeg';
import rangoli_main from './assets/gallery/rangoli/image1.jpeg';
import painting_main from './assets/gallery/arts/image6.jpeg';
import drawing_main from './assets/gallery/arts/image53.jpeg';
import embroidery_main from './assets/gallery/aari/image42.jpeg';

import {
    BookOpen, Calculator, Award, Calendar, GraduationCap,
    Users, ShieldCheck, Star, Brain, Globe, FlaskConical,
    MessageSquare, Target, Palette, Flower2, Scissors,
    Waves, Sparkles, Brush, Feather, Pencil
} from 'lucide-react';

export const ACADEMY_INFO = {
    name: "Aryabhata Abacus & Vedic Maths Hosaritti",
    email: "hattikotinanda@gmail.com",
    location: "Hosaritti Branch",
    instructor: "Nanda B Hattikoti",
    qualifications: "BVA",
    role: "Lecturer / Artist",
    affiliations: ["Aryabhata Abacus & Vedic Maths", "ISO Certified Company"],
    phone: "+91 81471 46702",
    whatsapp: "+91 81471 46702"
};

export const MY_SERVICES = [
    {
        id: "mehandi-designs",
        title: "Mehandi Designs",
        headline: "Exquisite Mehandi Art for Every Special Moment",
        description: "Intricate and beautiful Mehandi designs for weddings, festivals, and special events.",
        detailDescription: "We specialize in traditional and modern Mehandi designs, including bridal Mehandi, Arabic patterns, and custom artistic styles. Our work is known for its precision, dark stain, and creative flair. We use only 100% natural and organic henna, ensuring a safe and beautiful experience for all our clients.\n\nOur portfolio features incredibly tiny and precise motifs, personalized bridal initials (like custom V-D branding), and intricate wrist-banding that flows perfectly with your attire. Every design is a hand-drawn masterpiece tailored to your vision.",
        icon: <Flower2 className="w-8 h-8 text-primary" />,
        image: mehandi_main,
        features: [
            "Bridal Mehandi Specialist: Full hand & leg coverage with initials.",
            "Arabic & Indo-Western Styles: Elegant and modern flowing patterns.",
            "Natural & Safe Henna: 100% organic, chemical-free for dark stains.",
            "Intricate Mandala Shapes: Perfect symmetry and geometric precision."
        ],
        whyChoose: [
            { title: "Artistic Precision", desc: "Detailed and delicate patterns with clean, fine lines." },
            { title: "Custom Symbols", desc: "Personalized initials and symbols for your special day." },
            { title: "Experienced Artist", desc: "Years of expertise in various regional and modern styles." },
            { title: "Home Services", desc: "Available for home visits for bridal and group bookings." }
        ],
        offerings: [
            "Full Bridal Mehandi Packages",
            "Bridegroom Special Mehandi",
            "Sangeet & Mehandi Night Group Bookings",
            "Arabic & Minimalist Designer Patterns",
            "Traditional Full Arm Designs"
        ],
        keyDetails: [
            { label: "Material Used", value: "Organic Handmade Henna Paste" },
            { label: "Average Time", value: "2 to 6 hours for Bridal" },
            { label: "Stain Duration", value: "Typically 1 to 2 weeks" }
        ],
        cta: {
            text: "Ready to beautify your hands? Book your Mehandi appointment today!",
            location: "Hosaritti Branch"
        }
    },
    {
        id: "aari-work",
        title: "Aari Work (Embroidery)",
        headline: "Handcrafted Elegance: Professional Aari Embroidery",
        description: "Premium Aari work for blouses, sarees, and designer wear with detailed precision.",
        detailDescription: "Experience the timeless beauty of Aari embroidery. We create stunning hand-embroidered designs using beads, sequins, and threads to transform your garments into masterpieces. Our skilled artisans use the traditional long needle technique to create intricate patterns that machine embroidery cannot replicate.\n\nWe specialize in heavy bridal blouse work, where every stitch is a testament to our craftsmanship. From Zardosi and Maggam work to delicate bead-stitching, we ensure your special attire stands out with unparalleled elegance and detail.",
        icon: <Scissors className="w-8 h-8 text-primary" />,
        image: aari_main,
        features: [
            "Bridal Blouse Customization: Heavy Zardosi and Maggam designs.",
            "Intricate Neckline Detailing: Using high-quality beads and stones.",
            "Custom Sleeve Patterns: Elaborate hand-stitched floral & geometric art.",
            "Premium Finish: Secure stitching for durability and lasting shine."
        ],
        whyChoose: [
            { title: "Handcrafted Luxury", desc: "Every piece is a unique work of art crafted by expert hands." },
            { title: "Premium Materials", desc: "Finest silk threads, crystals, and authentic Zari." },
            { title: "Design Mockups", desc: "Visualizing the design on your specific blouse cut." },
            { title: "Professional Finish", desc: "Perfectly balanced thread tension for a smooth feel." }
        ],
        offerings: [
            "Bridal Blouse Full Aari Work",
            "Neckline & Sleeve Border Work",
            "Designer Saree Border Embroidery",
            "Zardosi & Bead Embellishments",
            "Custom Logo & Ethnic Pattern Designs"
        ],
        keyDetails: [
            { label: "Technique", value: "Traditional Long Needle Aari Work" },
            { label: "Materials", value: "Zari, Beads, Silk Thread, Crystals" },
            { label: "Turnaround", value: "3 to 10 days for heavy designs" }
        ],
        cta: {
            text: "Transform your garments with exquisite embroidery. Contact us now!",
            location: "Hosaritti Branch"
        }
    },
    {
        id: "saree-kuch",
        title: "Saree Kuch / Saree Work",
        headline: "Adding the Perfect Finish to Your Saree",
        description: "Traditional and modern Saree Kuch (tassels) and beadwork to enhance your silk sarees.",
        detailDescription: "Our specialized Saree Kuch services add a touch of traditional elegance to your silk sarees. We use high-quality silk threads and decorative beads to create beautiful, durable tassels. As seen in our work, we specialize in multi-colored silk tassels that perfectly complement the saree pallu.\n\nFrom contrast color matching to complex designer beadwork, our 'Kuch' or tassel work is not just a finish but an artistic addition that defines the premium look of a Kanchipuram or Banarasi saree.",
        icon: <Waves className="w-8 h-8 text-primary" />,
        image: kuch_main,
        features: [
            "Multi-colored Silk Tassels: Harmonized with saree borders.",
            "Beaded Pallu Edge: Premium bead accents for a royal look.",
            "Designer Crochet Kuch: Modern patterns and knotting styles.",
            "High-Grade Silk Threads: Using 100% pure silk for a soft feel."
        ],
        whyChoose: [
            { title: "Traditional Heritage", desc: "Authentic and experienced Saree Kuch techniques." },
            { title: "Contrast Matching", desc: "Expert selection of thread colors to pop against the saree." },
            { title: "Durability", desc: "Secure knotting that maintains its shape for years." },
            { title: "Express Service", desc: "Quick turnaround for your urgent festive needs." }
        ],
        offerings: [
            "Silk Thread Crochet Kuch",
            "Bridal Crystal Saree Kuch",
            "Layered Multi-color Tassels",
            "Traditional Hand-Knotting",
            "Heavy Bead & Stone Pallu Work"
        ],
        keyDetails: [
            { label: "Service Time", value: "1 to 3 days per saree" },
            { label: "Styles", value: "Crochet, Bead, Traditional, Modern" },
            { label: "Material", value: "Premium Silk Threads & Quality Beads" }
        ],
        cta: {
            text: "Give your silk saree the perfect finish it deserves. Talk to us!",
            location: "Hosaritti Branch"
        }
    },
    {
        id: "rangoli-portraits",
        title: "Rangoli Portraits",
        headline: "Lifelike Rangoli Art for Special Events",
        description: "Specialized in creating realistic Rangoli portraits and traditional floor art.",
        detailDescription: "Elevate your celebrations with stunning, large-scale Rangoli portraits. I specialize in realistic depictions of spiritual figures, deities, and honored guests for festivals and weddings. As demonstrated in my most ambitious works, I can create full floor-to-wall scale masterpieces featuring complex life-sized figures.\n\nUsing carefully blended, high-pigment powders, I bring life and emotion to every portrait. Whether it is a traditional deity for a temple event or a commemorative portrait, our rangoli art provides a breathtaking center-piece for any venue.",
        icon: <Sparkles className="w-8 h-8 text-primary" />,
        image: rangoli_main,
        features: [
            "Realistic Portrait Realism: Capturing facial expressions and depth.",
            "Devotional Deity Art: Large scale portraits of gods and saints.",
            "Ceremonial Floor Arches: Intricate traditional bordering.",
            "Vibrant Color Blending: Professional hand-mixed powder shades."
        ],
        whyChoose: [
            { title: "Unmatched Realism", desc: "Portrait-grade accuracy using traditional powder mediums." },
            { title: "Large Scale Capability", desc: "Able to cover entire entrance halls or large temple floors." },
            { title: "Speed & Performance", desc: "Efficient execution for live event atmospheres." },
            { title: "Durability", desc: "Techniques used to ensure the art stays crisp for the event duration." }
        ],
        offerings: [
            "Saint & Deity Portraits (Realistic)",
            "Wedding Entrance Floor Art",
            "Thematic Corporate Rangoli",
            "Village Fair & Temple Scale Art",
            "Festive Specials (Deepavali/Sankranti)"
        ],
        keyDetails: [
            { label: "Setup Time", value: "4 to 12 hours based on scale" },
            { label: "Longevity", value: "Semi-permanent event duration" },
            { label: "Artist Reach", value: "Haveri District & beyond" }
        ],
        cta: {
            text: "Create a stunning first impression at your event. Book an artist!",
            location: "Hosaritti Branch"
        }
    },
    {
        id: "paintings",
        title: "Paintings",
        headline: "Custom Canvas & Portrait Paintings",
        description: "Hand-painted masterpieces on canvas and walls, specializing in portrait realism.",
        detailDescription: "Led by a BVA-qualified artist, we provide premium painting services specializing in acrylic and oil portrait realism. As seen in our studio sessions, I work closely with students and clients to capture life in every stroke.\n\nFrom large canvas commissions for your office to intimate family portraits, we ensure every piece tells a story through rich texture and professional color blending. We also specify in wall murals for modern homes and commercial spaces.",
        icon: <Brush className="w-8 h-8 text-primary" />,
        image: painting_main,
        features: [
            "Acrylic & Oil Portraits: Exceptional facial realism and depth.",
            "Commissioned Masterpieces: Artwork tailored to your space.",
            "Studio Sessions: Watch the art come to life in our studio.",
            "Wall Murals: Transforming interiors into artistic statements."
        ],
        whyChoose: [
            { title: "Qualified Artist", desc: "Bachelor of Visual Arts (BVA) expert guidance." },
            { title: "Portrait Specialist", desc: "High accuracy in capturing individual personality." },
            { title: "Longevity", desc: "Using archival-grade paints and protective varnishes." },
            { title: "Personalized Consult", desc: "Detailed discussion on medium, style, and framing." }
        ],
        offerings: [
            "Custom Canvas Portrait Painting",
            "Interior Wall Mural Art",
            "Acrylic Scenic Landscapes",
            "Charcoal & Graphite Realism",
            "Commemorative Event Paintings"
        ],
        keyDetails: [
            { label: "Artist Qual.", value: "BVA (Bachelor of Visual Arts)" },
            { label: "Mediums", value: "Oil, Acrylic, Charcoal, Mixed" },
            { label: "Framing", value: "Available on request" }
        ],
        cta: {
            text: "Want a custom masterpiece? Let's discuss your artistic vision!",
            location: "Hosaritti Branch"
        }
    },
    {
        id: "embroidery-designs",
        title: "Embroidery Designs",
        headline: "Versatile Embroidery for All Fabrics",
        description: "Creative hand and machine embroidery designs for a variety of clothing and home decor.",
        detailDescription: "Beyond Aari work, we offer a wide range of embroidery services including cross-stitch, satin stitch, and modern embroidery patterns to decorate your fabrics. Embroidery adds a tactile and visual depth that enhances even the simplest garments.\n\nWe provide services for both personal attire and home textiles like cushion covers, table runners, and wall hangings. I specialize in traditional chain-stitching and modern floral patterns that breathe personality into any textile.",
        icon: <Feather className="w-8 h-8 text-primary" />,
        image: embroidery_main,
        features: [
            "Detailed Chain-Stitch Work: Durable and elegant motifs.",
            "Custom Floral & Ethnic Patterns: Tailored to your favorite colors.",
            "Fabric Revitalization: Restoring old garments with artistic patches.",
            "Home Accessory Decor: Customized cushion & table linen art."
        ],
        whyChoose: [
            { title: "Meticulous Detail", desc: "Single-thread precision for a high-end refined look." },
            { title: "Creative Versatility", desc: "Designs applied to cotton, silk, and denim effortlessly." },
            { title: "Fabric Safety", desc: "Careful handling of delicate and antique fabrics." },
            { title: "Hand-Finished", desc: "The unique character of handmade textile art." }
        ],
        offerings: [
            "Custom Kurti & Suit Embroidery",
            "Artistic Cushion & Pillow Work",
            "Traditional Indian Stitch Patterns",
            "Appliqué & Patchwork Restoration",
            "Monogramming for Personal Items"
        ],
        keyDetails: [
            { label: "Service", value: "Professional Hand Embroidery" },
            { label: "Order Type", value: "Individual & Bulk Commissions" },
            { label: "Location", value: "Hosaritti Branch" }
        ],
        cta: {
            text: "Add a touch of handcrafted detail to your wardrobe. Email us!",
            location: "Hosaritti Branch"
        }
    }
];

export const CLASSES_OFFERED = [
    {
        id: "abacus-classes",
        title: "Abacus Classes",
        headline: "Unlock Your Child's Mental Potential",
        description: "Master mental math and improve concentration through our certified Abacus training program.",
        detailDescription: "Our Abacus program is designed for children to develop speed and accuracy in calculations. It activates both sides of the brain, improving focus, memory, and logical thinking. Aryabhata Abacus & Vedic Maths is a premier institute for brain development. We don't just teach math; we activate your child's brain.\n\nAs seen in our classroom material, students learn to visualize the abacus tool, performing complex multi-digit calculations mentally with incredible accuracy. This foundation builds confidence that extends beyond mathematics.",
        icon: <Calculator className="w-8 h-8 text-primary" />,
        image: abacus2,
        secondImage: abacus3,
        features: [
            "Whole Brain Development: Left (Logical) & Right (Creative) activation.",
            "Photographic Memory Training: Instant number visualization.",
            "Competitive Excellence: State & District level prep.",
            "Focus Enhancement: Proven methods to boost school concentration."
        ],
        whyChoose: [
            { title: "Scientific Framework", desc: "Ancient calculation tools meet modern brain development." },
            { title: "Global Certification", desc: "ISO 9001:2015 Quality standards." },
            { title: "Life-Long Confidence", desc: "Accuracy and speed that empowers future learning." },
            { title: "Dedicated Batches", desc: "Age-appropriate learning groups for personalized care." }
        ],
        brainScience: {
            left: ["Logical Thinking", "Number Skills", "Analysis"],
            right: ["Photographic Memory", "Creativity", "Visualization"]
        },
        offerings: [
            "9-Level Sequential Abacus Course",
            "Fast-Track Vedic Maths (Grade 9+)",
            "Championship Coaching (State/District)",
            "Progressive Skill Certification",
            "Mental Math Speed Training"
        ],
        keyDetails: [
            { label: "Age Bracket", value: "5 to 14 Years" },
            { label: "Batches", value: "Weekdays & Weekends" },
            { label: "Quality", value: "ISO 9001:2015 Certified" }
        ],
        cta: {
            text: "Give your child the Aryabhata advantage today. Call for a Free Demo.",
            location: "Hosaritti Branch"
        }
    },
    {
        id: "drawing-classes",
        title: "Drawing Classes",
        headline: "Nurturing Creativity Through Fine Art",
        description: "Master the fundamentals of drawing, shading, and painting in a professional studio environment.",
        detailDescription: "Our drawing classes are founded on the principles of academic fine art. Guided by a BVA-qualified mentor, students explore basic shapes, perspective, and advanced shading techniques. In our classes, students move from simple sketching to professional-grade canvas composition.\n\nWe provide a nurturing environment where creativity is structured into skill. Whether you are a child picking up a crayon or an adult exploring oils, our curriculum is designed to help you see and capture the world correctly.",
        icon: <Pencil className="w-8 h-8 text-primary" />,
        image: drawing_main,
        features: [
            "Fundamental Sketching: Mastering lines, forms, and perspective.",
            "Shading & Texture: Developing depth in grayscale and color.",
            "Medium Exploration: Watercolors, Acrylics, Charcoal, and Oils.",
            "Creative Composition: Learning to arrange subjects for maximum impact."
        ],
        whyChoose: [
            { title: "Expert Instruction", desc: "Personalized mentorship from a BVA-qualified teacher." },
            { title: "Professional Studio", desc: "Learn in a space designed for artistic focus." },
            { title: "Portfolio Prep", desc: "Assistance in building art portfolios for future studies." },
            { title: "All Age Batches", desc: "Specific groups focused on age-appropriate techniques." }
        ],
        offerings: [
            "Elementary Grade Drawing",
            "Intermediate & Advanced Shading",
            "Acrylic & Oil Painting Workshops",
            "Landscape & Still Life Studies",
            "Yearly Student Art Exhibition"
        ],
        keyDetails: [
            { label: "Mentor", value: "BVA Qualified Artist" },
            { label: "Enrolment", value: "New Batches Every Month" },
            { label: "Materials", value: "Studio kits available" }
        ],
        cta: {
            text: "Unleash your inner artist. Join our drawing classes today!",
            location: "Hosaritti Branch"
        }
    }
];

export const PROGRAMS = [...MY_SERVICES, ...CLASSES_OFFERED];

export const WHY_CHOOSE_US = [
    {
        title: "Expert Instruction",
        desc: "Led by Deepa S Ballari, a Senior Mathematics Lecturer with M.A., M.Ed.",
        icon: <Users className="w-6 h-6" />
    },
    {
        title: "ISO Certified Quality",
        desc: "We maintain international standards in educational delivery and management.",
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        title: "Vedic Maths Affiliation",
        desc: "Official partner of Aryabhata Vedic Maths for superior mental math training.",
        icon: <Award className="w-6 h-6" />
    },
    {
        title: "Proven Results",
        desc: "Highly successful track record in Navodaya entrance and school exams.",
        icon: <Star className="w-6 h-6" />
    }
];

// Automatically import all images and videos from assets/gallery subfolders
const galleryModules = import.meta.glob('./assets/gallery/**/*.{jpeg,jpg,png,webp,mp4}', { eager: true, import: 'default' });

const categoryMap = {
    'aari': 'Embroidery',
    'abacus': 'Abacus',
    'arts': 'Arts & Painting',
    'mehandi': 'Mehandi',
    'rangoli': 'Rangoli'
};

// Sort keys naturally (aari/image1, aari/image2, ...)
const galleryKeys = Object.keys(galleryModules).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
);

export const GALLERY_IMAGES = galleryKeys.map((key) => {
    const src = galleryModules[key];
    const parts = key.split('/');
    // Get the second to last part which should be the folder name
    const folder = parts[parts.length - 2];
    return {
        src,
        category: categoryMap[folder] || 'General',
        type: key.toLowerCase().endsWith('.mp4') ? 'video' : 'image'
    };
});

// Extract unique categories and ensure "All" is first
const categories = [...new Set(GALLERY_IMAGES.map(img => img.category))].sort();
export const GALLERY_CATEGORIES = ["All", ...categories];

// Create a diverse preview for the home page gallery (at least one from each category)
const getDiversePreview = () => {
    const cats = categories; // unique categories
    const preview = [];
    const seenCategories = new Set();
    const usedIndices = new Set();

    // 1. Pick first available from each category
    cats.forEach(cat => {
        const index = GALLERY_IMAGES.findIndex(img => img.category === cat);
        if (index !== -1) {
            preview.push(GALLERY_IMAGES[index]);
            seenCategories.add(cat);
            usedIndices.add(index);
        }
    });

    // 2. Fill the rest with remaining items until we have 9
    GALLERY_IMAGES.forEach((img, index) => {
        if (preview.length < 9 && !usedIndices.has(index)) {
            preview.push(img);
            usedIndices.add(index);
        }
    });

    return preview;
};

export const GALLERY_PREVIEW = getDiversePreview();
