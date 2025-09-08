const resourcesDirectory = {
  categories: [
    {
      id: 'suppliers',
      title: 'Material & Tool Suppliers',
      items: [
        {
          name: 'Centaur Forge',
          description: 'Complete blacksmithing supplies - anvils, forges, tools, and materials',
          website: 'https://www.centaurforge.com',
          specialties: ['Anvils', 'Forges', 'Hand tools', 'Coal', 'Books']
        },
        {
          name: 'McMaster-Carr',
          description: 'Industrial supply company with extensive metal stock and tools',
          website: 'https://www.mcmaster.com',
          specialties: ['Raw materials', 'Precision tools', 'Fasteners', 'Safety equipment']
        },
        {
          name: 'Jantz Supply',
          description: 'Knifemaking specialists - steels, handle materials, and supplies',
          website: 'https://www.jantzsupply.com',
          specialties: ['Knife steels', 'Handle materials', 'Grinders', 'Heat treating']
        },
        {
          name: 'Online Metals',
          description: 'Wide selection of metals in small quantities',
          website: 'https://www.onlinemetals.com',
          specialties: ['Steel', 'Aluminum', 'Brass', 'Custom cutting']
        },
        {
          name: 'Admiral Steel',
          description: 'Specialty knife and tool steels',
          website: 'https://www.admiralsteel.com',
          specialties: ['High-carbon steel', 'Stainless steel', 'Damascus', 'Tool steel']
        },
        {
          name: 'Blacksmiths Depot',
          description: 'Traditional blacksmithing tools and supplies',
          website: 'https://www.blacksmithsdepot.com',
          specialties: ['Hammers', 'Tongs', 'Hardy tools', 'Coal forges']
        }
      ]
    },
    {
      id: 'education',
      title: 'Educational Resources',
      items: [
        {
          name: 'ABANA (Artist Blacksmith Association)',
          description: 'International organization promoting blacksmithing education',
          website: 'https://abana.org',
          specialties: ['Workshops', 'Publications', 'Conference', 'Local chapters']
        },
        {
          name: 'The Crucible',
          description: 'Industrial arts school in Oakland, CA',
          website: 'https://thecrucible.org',
          specialties: ['Classes', 'Youth programs', 'Studio access', 'Certification']
        },
        {
          name: 'New England School of Metalwork',
          description: 'Comprehensive metalworking education',
          website: 'https://newenglandschoolofmetalwork.com',
          specialties: ['Blacksmithing', 'Bladesmithing', 'Welding', 'Jewelry']
        },
        {
          name: 'Forged in Fire Episodes',
          description: 'History Channel series showcasing bladesmithing techniques',
          platform: 'History Channel / Streaming',
          specialties: ['Blade making', 'Competition', 'Historical weapons', 'Techniques']
        },
        {
          name: 'Essential Craftsman (YouTube)',
          description: 'Scott Wadsworth teaches traditional crafts including blacksmithing',
          platform: 'YouTube',
          specialties: ['Technique videos', 'Tool making', 'Shop setup', 'Safety']
        },
        {
          name: 'Black Bear Forge',
          description: 'John Switzer\'s extensive free tutorials and plans',
          website: 'https://www.blackbearforge.com',
          specialties: ['Project plans', 'Beginner guides', 'Tool making', 'Free resources']
        }
      ]
    },
    {
      id: 'books',
      title: 'Essential Reading',
      items: [
        {
          name: 'The Backyard Blacksmith',
          author: 'Lorelei Sims',
          description: 'Perfect introduction to blacksmithing with clear projects',
          isbn: '978-0785825678',
          level: 'Beginner'
        },
        {
          name: 'The Art of Blacksmithing',
          author: 'Alex Bealer',
          description: 'Classic comprehensive guide to traditional techniques',
          isbn: '978-0785803959',
          level: 'All levels'
        },
        {
          name: 'The Complete Bladesmith',
          author: 'Jim Hrisoulas',
          description: 'Forging Damascus and pattern-welded blades',
          isbn: '978-1581606331',
          level: 'Intermediate'
        },
        {
          name: 'The Heat Treater\'s Guide',
          author: 'ASM International',
          description: 'Comprehensive heat treatment data for tool steels',
          isbn: '978-0871703705',
          level: 'Advanced'
        },
        {
          name: 'A Blacksmithing Primer',
          author: 'Randy McDaniel',
          description: 'Step-by-step course in basic blacksmithing',
          isbn: '978-0966258912',
          level: 'Beginner'
        },
        {
          name: 'The Wonder of Knifemaking',
          author: 'Wayne Goddard',
          description: 'Master smith shares 50 years of experience',
          isbn: '978-1440216848',
          level: 'All levels'
        }
      ]
    },
    {
      id: 'communities',
      title: 'Online Communities & Forums',
      items: [
        {
          name: 'IForgeIron',
          description: 'Largest online blacksmithing community',
          website: 'https://www.iforgeiron.com',
          features: ['Forums', 'Blueprints', 'Gallery', 'Marketplace']
        },
        {
          name: 'Blade Forums',
          description: 'Dedicated knife and sword making community',
          website: 'https://www.bladeforums.com',
          features: ['Technique discussion', 'Show and tell', 'Marketplace', 'Reviews']
        },
        {
          name: 'Reddit r/Blacksmith',
          description: 'Active Reddit community for blacksmiths',
          website: 'https://reddit.com/r/blacksmith',
          features: ['Project sharing', 'Advice', 'Resources', 'Weekly threads']
        },
        {
          name: 'The Forge Hub (Facebook)',
          description: 'Facebook group for blacksmiths worldwide',
          platform: 'Facebook',
          features: ['Photo sharing', 'Live demos', 'Local meetups', 'Tool trading']
        },
        {
          name: 'AlloyAvenue',
          description: 'Metalworking community forum',
          website: 'https://www.alloyavenue.com',
          features: ['Technical discussion', 'Project logs', 'Equipment reviews']
        }
      ]
    },
    {
      id: 'equipment',
      title: 'Equipment Manufacturers',
      items: [
        {
          name: 'Nimba Anvils',
          description: 'Premium American-made anvils',
          website: 'https://www.nimbaforge.com',
          products: ['Anvils', 'Stands', 'Swage blocks', 'Custom work']
        },
        {
          name: 'Holland Anvil',
          description: 'Cast steel anvils with lifetime warranty',
          website: 'https://hollandanvil.com',
          products: ['Anvils', 'Portable forges', 'Tool sets']
        },
        {
          name: 'Majestic Forge',
          description: 'Propane forges for all skill levels',
          website: 'https://www.majesticforge.com',
          products: ['Gas forges', 'Burners', 'Refractory', 'Accessories']
        },
        {
          name: 'Grizzly Industrial',
          description: 'Metal working machinery and power tools',
          website: 'https://www.grizzly.com',
          products: ['Belt grinders', 'Power hammers', 'Presses', 'Lathes']
        },
        {
          name: 'Anyang Power Hammers',
          description: 'Professional grade power hammers',
          website: 'https://www.anyangusa.net',
          products: ['Power hammers', 'Dies', 'Foundation plans', 'Parts']
        },
        {
          name: 'Evenheat Kilns',
          description: 'Heat treating ovens and kilns',
          website: 'https://www.evenheat-kiln.com',
          products: ['Heat treat ovens', 'Controllers', 'Custom sizes']
        }
      ]
    },
    {
      id: 'workshops',
      title: 'Professional Workshops & Schools',
      items: [
        {
          name: 'Penland School of Craft',
          location: 'North Carolina, USA',
          description: 'Premier craft school with extensive metalworking programs',
          website: 'https://penland.org',
          programs: ['Summer sessions', 'Workshops', 'Residencies']
        },
        {
          name: 'John C. Campbell Folk School',
          location: 'North Carolina, USA',
          description: 'Traditional crafts including comprehensive blacksmithing',
          website: 'https://folkschool.org',
          programs: ['Week-long courses', 'Weekend workshops', 'Certification']
        },
        {
          name: 'Haystack Mountain School',
          location: 'Maine, USA',
          description: 'International craft school with metalworking focus',
          website: 'https://haystack-mtn.org',
          programs: ['Summer programs', 'Open studio', 'Workshops']
        },
        {
          name: 'Turley Forge School',
          location: 'New Mexico, USA',
          description: 'Frank Turley\'s renowned traditional blacksmithing school',
          contact: 'By appointment',
          programs: ['Intensive courses', 'Private instruction', 'Tool making']
        },
        {
          name: 'Fire and Brimstone Forge',
          location: 'Michigan, USA',
          description: 'Specializes in blade and Damascus steel courses',
          website: 'Local search required',
          programs: ['Bladesmithing', 'Damascus', 'Beginning blacksmith']
        }
      ]
    },
    {
      id: 'safety',
      title: 'Safety Equipment & Information',
      items: [
        {
          name: 'OSHA Welding & Cutting Safety',
          description: 'Official safety guidelines for hot work',
          website: 'https://www.osha.gov/welding-cutting-brazing',
          resources: ['Safety standards', 'Hazard alerts', 'Training materials']
        },
        {
          name: 'Lincoln Electric Safety Equipment',
          description: 'Professional grade PPE for metalworking',
          website: 'https://www.lincolnelectric.com',
          products: ['Welding helmets', 'Respirators', 'Protective clothing']
        },
        {
          name: 'MSA Safety',
          description: 'Industrial safety equipment manufacturer',
          website: 'https://www.msasafety.com',
          products: ['Gas detectors', 'Respirators', 'Eye protection', 'Hearing protection']
        },
        {
          name: 'First Aid Training - Red Cross',
          description: 'Essential first aid and CPR training',
          website: 'https://www.redcross.org',
          courses: ['First aid', 'CPR', 'Workplace safety', 'Burn treatment']
        }
      ]
    }
  ]
};

module.exports = resourcesDirectory;