const guideContent = {
  chapters: [
    {
      id: 'finding-ore',
      title: 'Finding Ore in the Mountains',
      icon: 'chapter-ore.png',
      content: `
        <h2>Geological Indicators and Ore Identification</h2>
        
        <h3>Reading the Mountain</h3>
        <p>When venturing into mountainous terrain seeking metal ores, understand that ore deposits follow geological patterns. Look for quartz veins - these white, glassy mineral formations often carry gold, silver, and copper. Iron ore typically appears as dark red or brown streaks (hematite) or black magnetic stones (magnetite) in sedimentary layers.</p>
        
        <h3>Visual Indicators</h3>
        <p>Oxidation zones provide clear signals: green staining indicates copper (malachite), rust-red suggests iron, yellow-brown points to sulfur compounds often associated with valuable metals. Water seeping from rocks may leave colored deposits - blue-green for copper, orange for iron, white for zinc.</p>
        
        <h3>Physical Testing</h3>
        <p>Carry a strong magnet to identify magnetite iron ore. Test hardness with a steel knife - ores harder than steel (cannot be scratched) include magnetite and hematite. Streak tests on unglazed porcelain reveal true mineral colors: hematite leaves red streaks despite appearing black, pyrite leaves greenish-black despite looking golden.</p>
        
        <h3>Promising Locations</h3>
        <p>Focus efforts where different rock types meet (contact zones), near ancient volcanic activity areas, and along fault lines where Earth's crust has shifted. Stream beds below ore deposits often contain concentrated heavy minerals - pan these areas to find indicators of upstream deposits.</p>
        
        <h3>Collection Methods</h3>
        <p>For surface collection, use a rock hammer and cold chisel to extract samples. Never use explosives without proper training and permits. Collect 10-20 pound samples from different areas of a vein for proper assessment. Mark locations carefully using GPS coordinates or detailed landmark descriptions for return visits.</p>
        
        <h3>Safety Considerations</h3>
        <p>Mountain prospecting requires preparation: inform others of your plans, carry first aid supplies, bring adequate water and food, wear proper protective equipment including safety glasses when breaking rocks. Be aware of wildlife, weather changes, and unstable rock formations. Never enter abandoned mine shafts - they contain deadly gases and unstable structures.</p>
      `
    },
    {
      id: 'building-kilns',
      title: 'Constructing Kilns and Furnaces',
      icon: 'chapter-kiln.png',
      content: `
        <h2>From Clay Kilns to Stone Furnaces</h2>
        
        <h3>Clay Kiln Construction</h3>
        <p>Begin with a simple updraft kiln using locally sourced clay mixed with straw for tempering. Create a circular base 3 feet in diameter, building walls 18 inches high with a 4-inch thickness. Leave a 8-inch opening at the base for fuel feeding and air intake. Form a dome top with a 6-inch chimney hole. Let the structure dry for 48 hours, then fire it slowly with wood to cure the clay - this initial firing hardens your kiln for repeated use.</p>
        
        <h3>Stone Furnace for Higher Temperatures</h3>
        <p>For smelting operations requiring 2000°F+, construct a stone furnace. Select heat-resistant stones like granite or sandstone - avoid river rocks which may explode from trapped moisture. Build a square chamber 2x2 feet internally, 3 feet high. Use clay mortar between stones, leaving gaps at the base for tuyeres (air pipes). Line the interior with fire clay or crushed firebrick mixed with clay for better heat retention.</p>
        
        <h3>Bellows System</h3>
        <p>Adequate air supply is crucial for high temperatures. Construct bellows from leather or heavy canvas with wooden boards. Two-bag bellows provide continuous airflow: while one compresses, the other fills. Connect to the furnace via clay or metal pipes (tuyeres) angled downward at 30 degrees into the combustion zone. For optimal results, position tuyeres 6 inches above the furnace bottom.</p>
        
        <h3>Fuel Preparation</h3>
        <p>Charcoal provides the best fuel for metalworking, burning hotter and cleaner than wood. Create charcoal by partially burning hardwood in a covered pit or metal container with limited air holes. Start with dry hardwood cut into 4-inch pieces. The process takes 12-24 hours - wood should be blackened throughout but still solid. One cubic foot of wood yields approximately 5-7 pounds of charcoal.</p>
        
        <h3>Temperature Management</h3>
        <p>Judge temperature by color in dim light: black heat (750°F) barely visible red, cherry red (1300°F), bright cherry (1500°F), orange (1800°F), yellow (2000°F), white (2300°F+). Control temperature through air supply via bellows speed, fuel addition rate, and chimney dampers. For consistent results, maintain steady airflow and fuel feed rather than dramatic changes.</p>
        
        <h3>Crucible Creation</h3>
        <p>Form crucibles from fire clay or graphite-clay mixture. Shape on a potter's wheel or hand-form, creating walls 1/2 inch thick for small crucibles, thicker for larger ones. Fire slowly to 2000°F before first metal use. Silicon carbide crucibles handle higher temperatures but require purchasing. A #4 crucible holds about 12 pounds of copper or 4 pounds of iron.</p>
      `
    },
    {
      id: 'smelting-basics',
      title: 'Smelting and Refining',
      icon: 'chapter-smelting.png',
      content: `
        <h2>Extracting Metal from Ore</h2>
        
        <h3>Ore Preparation</h3>
        <p>Crush ore to pea-sized pieces using a hammer and anvil or stone crusher. Smaller, uniform pieces smelt more efficiently. Roast sulfide ores in an open fire before smelting to drive off sulfur - this prevents toxic gas formation during smelting. Magnetic separation using strong magnets can concentrate iron ores. Hand-sorting removes obvious waste rock, improving efficiency.</p>
        
        <h3>Flux Selection</h3>
        <p>Flux removes impurities by forming slag. For iron ore, use limestone (calcium carbonate) or crushed seashells - ratio of 1:3 flux to ore. Copper ores require silica sand flux if ore is basic, or limestone if ore is siliceous. Lead ores flux well with iron oxide. Borax serves as universal flux for small-scale operations, particularly effective for gold and silver. Mix flux thoroughly with crushed ore before charging the furnace.</p>
        
        <h3>The Smelting Process</h3>
        <p>Layer charcoal and ore-flux mixture in 1:1 ratio by volume. Light furnace from top, allowing fire to burn downward. Once established, begin bellows operation for consistent airflow. Add new charges (ore-flux and charcoal) every 20-30 minutes as material settles. Maintain temperature appropriate for metal: copper (2000°F), iron (2600°F+), lead (1100°F), silver (1760°F). Process takes 4-8 hours depending on ore quality and furnace size.</p>
        
        <h3>Slag Management</h3>
        <p>Slag floats above molten metal due to lower density. Good slag appears glassy when cooled, indicating complete reaction. Tap slag periodically through upper tap hole to prevent accumulation. Dark, metallic slag indicates metal loss - adjust flux ratio. Save slag for re-smelting as it often contains recoverable metal. Crushed slag makes excellent road base or concrete aggregate.</p>
        
        <h3>Metal Collection</h3>
        <p>Bottom-tap furnaces allow metal collection while hot - prepare sand-cast ingot molds beforehand. For bloom furnaces (iron), extract hot bloom with long tongs, hammer immediately to consolidate metal and expel slag. Small operations can break furnace after cooling to retrieve metal button. Weigh product to calculate recovery rate: 30-60% is typical for primitive smelting.</p>
        
        <h3>Refining Techniques</h3>
        <p>Cupellation removes base metals from precious metals: heat metal with lead in bone ash cupel, lead oxidizes and absorbs into cupel leaving pure gold/silver. For iron, repeated heating and hammering in forge with flux removes remaining slag, increasing carbon content creates steel. Copper refining involves re-melting with charcoal cover and poling (stirring with green wood) to remove oxygen.</p>
        
        <h3>Environmental Responsibility</h3>
        <p>Smelting produces toxic fumes and waste. Work outdoors or with excellent ventilation. Never smelt galvanized, painted, or unknown metals. Properly dispose of slag and furnace linings which may contain heavy metals. Be aware of local regulations regarding small-scale smelting. Consider the environmental impact and use responsible practices.</p>
      `
    },
    {
      id: 'forging-fundamentals',
      title: 'Forging Fundamentals',
      icon: 'chapter-forging.png',
      content: `
        <h2>Shaping Metal Through Heat and Hammer</h2>
        
        <h3>Forge Setup</h3>
        <p>A basic coal forge needs: firepot (cast iron or steel plate formed into 12-inch bowl), tuyere for air delivery, chimney for smoke removal, and water quench tub. Position anvil within one step of forge - efficiency matters when iron is hot. Mount anvil on hardwood stump or steel stand at knuckle height when arm hangs relaxed. Ensure solid mounting - any bounce wastes energy and indicates poor setup.</p>
        
        <h3>Essential Tools</h3>
        <p>Start with: 2-3 pound cross-peen hammer for general work, ball-peen for riveting, 4-pound sledge for heavy drawing. Tongs must grip securely - make multiple pairs for different stock sizes. Hardy tools fit anvil's square hole: cut-off hardy, bending fork, various bottom swages. Punches, drifts, and chisels shape holes and split metal. Measuring tools: calipers, dividers, and square ensure accuracy.</p>
        
        <h3>Understanding Heat Colors</h3>
        <p>Black heat (750°F): Metal barely workable, good for straightening. Blood red (1100°F): Light work only. Cherry red (1400°F): General forging temperature. Bright cherry (1500°F): Heavy forging, welding preparation. Orange (1800°F): Drawing out, heavy work. Light yellow (2000°F): Near melting, forge welding. Sparking white: Burning - metal is ruined. Work in dim light to accurately judge colors.</p>
        
        <h3>Basic Techniques</h3>
        <p>Drawing: Lengthen metal by hammering, rotating 90° between blows for even reduction. Upsetting: Thicken by hammering end-on, heat only section to be upset. Bending: Use edge of anvil or bending fork, work at bright red heat. Punching: Drive punch halfway from each side to prevent exit damage. Drifting: Enlarge and shape holes using tapered drift. Forge welding: Clean surfaces, heat to white, flux with borax, hammer quickly with light overlapping blows.</p>
        
        <h3>Controlling Carbon Content</h3>
        <p>Forge atmosphere affects carbon: oxidizing fire (excess air) decarburizes surface, reducing fire (excess fuel) adds carbon. For high-carbon steel, maintain clean, neutral fire. Repeated heating causes carbon loss - work efficiently. Case hardening adds carbon to low-carbon steel: pack in charcoal, heat to 1650°F for hours. Spark testing on grinder reveals carbon content: more branches indicate higher carbon.</p>
        
        <h3>Heat Treatment Basics</h3>
        <p>Annealing: Heat to critical temperature (cherry red), cool slowly in ashes or vermiculite - softens metal. Normalizing: Heat to critical, air cool - relieves stress, refines grain. Hardening: Heat to critical, quench in water, oil, or brine - maximum hardness but brittle. Tempering: Reheat hardened steel to specific temperature (judged by oxide colors), cool - reduces brittleness while maintaining useful hardness.</p>
        
        <h3>Common Projects for Practice</h3>
        <p>Square nail: Basic drawing and heading practice. Horseshoe: Involves bending, punching, and proper curves. Knife: Combines all techniques plus heat treatment. Hook: Teaches decorative twisting and scrollwork. Tongs: Essential tool that teaches jaw fitting and rivet joining. Each project builds skills progressively - master basics before attempting complex work.</p>
      `
    },
    {
      id: 'blade-making',
      title: 'The Art of Blade Making',
      icon: 'chapter-blade.png',
      content: `
        <h2>From Raw Steel to Finished Blade</h2>
        
        <h3>Steel Selection</h3>
        <p>High-carbon steel (0.6-1.0% carbon) makes excellent blades: 1084 is forgiving for beginners, 1095 offers maximum hardness, 5160 (spring steel) provides toughness. Salvage sources: old files (usually 1095), leaf springs (5160), saw blades (L6 or 15N20). Test unknown steel: spark test shows carbon content, hardening test confirms heat-treatability. Avoid mystery steel for important projects.</p>
        
        <h3>Forging the Blade</h3>
        <p>Start with bar stock 1/4" thick, 1.5" wide. Heat to bright orange, draw out tang first - this becomes handle attachment. Forge blade profile, maintaining even thickness. Create distal taper (thickness reduces toward tip) for proper balance. Establish edge bevels at 15-20 degrees using hammer control - don't forge edge razor-thin. Leave edge 1/16" thick for heat treatment. Normalize three times by heating to critical and air cooling - this relieves forging stress.</p>
        
        <h3>Grinding and Profiling</h3>
        <p>Establish final profile with angle grinder or belt sander before heat treatment. Maintain symmetry - mark centerlines on spine and edge. Grind bevels to 0.020" edge thickness (about a dime's thickness). Use fresh belts - worn belts generate excess heat. Cool frequently in water to prevent overheating. Surface finish to 120-220 grit before heat treatment ensures even heating and reveals any cracks.</p>
        
        <h3>Heat Treatment Process</h3>
        <p>Critical temperature varies by steel: 1084 at 1475°F, 5160 at 1525°F. Use magnet test - steel becomes non-magnetic near critical temperature. Soak at temperature for 10 minutes per inch of thickness. Quench quickly: water for simple steels, warm oil (140°F) for deeper hardening steels. Edge-quench technique: immerse edge only, allowing spine to cool slowly for differential hardness (soft spine, hard edge). Immediately temper after quenching to prevent cracking.</p>
        
        <h3>Tempering for Performance</h3>
        <p>Tempering temperature determines final properties: 350°F yields maximum hardness but brittle, 400°F balances hardness and toughness, 450°F for spring-like flexibility. Use oven for consistent results, or observe oxide colors on polished steel: pale yellow (430°F), dark straw (460°F), purple (520°F), blue (570°F). Temper for one hour minimum, two cycles improves consistency. Test with file - properly hardened steel resists filing.</p>
        
        <h3>Handle Construction</h3>
        <p>Full tang provides maximum strength - scales attach with pins or bolts. Hidden tang requires less handle material - burn or drill tang socket in handle. Traditional materials: hardwood (walnut, maple, cocobolo), antler, bone, leather washers. Modern materials: Micarta, G10, stabilized wood. Shape handle for secure grip when wet. Seal wood with boiled linseed oil or polyurethane. Balance point should be at or slightly forward of guard.</p>
        
        <h3>Sharpening and Finishing</h3>
        <p>Progress through grits: 220, 400, 600 for working finish, up to 2000 for mirror polish. Maintain consistent angle - 15-20° per side for general use, 20-25° for heavy duty. Establish edge on 400 grit stone, refine on 1000, polish on 4000+. Strop on leather with compound for razor edge. Test sharpness: shave hair, slice paper, cut rope. Protect with oil or wax to prevent rust.</p>
      `
    },
    {
      id: 'tool-creation',
      title: 'Creating Essential Tools',
      icon: 'chapter-tools.png',
      content: `
        <h2>Forging Your Own Workshop Tools</h2>
        
        <h3>Hammer Making</h3>
        <p>Start with appropriate steel: 1045 for general hammers, 4140 for heavy use. For 2-pound hammer, use 2.5" x 2" x 4" stock. Forge carefully to avoid cracks - work at bright orange heat. Punch eye hole undersized, drift to final shape ensuring proper taper for secure handle fitting. Faces must be parallel and smooth. Heat treat by heating to critical temperature, quench face and peen only, leaving eye soft to prevent cracking. Temper faces to dark straw (460°F) for durability.</p>
        
        <h3>Tong Construction</h3>
        <p>Use 1/2" x 1" mild steel bar, 18" long for medium tongs. Forge jaw end first: flatten, bend at right angle, shape jaw for intended stock size. Create pivot point by necking down at jaw base. Draw out reins to comfortable length. Rivet with 1/4" rivet, adjust jaws while hot for proper alignment. Make multiple tongs for different stock shapes: flat, round, square, pick-up. Well-fitted tongs prevent workplace accidents.</p>
        
        <h3>Chisel and Punch Making</h3>
        <p>Use high-carbon steel: old car coil springs work excellently. For cold chisel, forge 30° angle cutting edge, for hot chisel use 60° angle. Punches need careful attention to prevent mushrooming: maintain slight taper from striking end. Heat treat carefully: harden completely, then temper striking end to blue (570°F) to prevent shattering, cutting end to brown (480°F) for edge retention. Dress mushroomed heads immediately to prevent dangerous chips.</p>
        
        <h3>Hardy Tool Creation</h3>
        <p>Hardy shank must fit anvil's hardy hole precisely - typically 1" square. Forge from solid stock or weld shank to tool. Cut-off hardy: forge blade at 60° angle, harden edge only. Bending fork: two vertical posts spaced for common stock sizes. Swage blocks: form matching top and bottom dies for consistent shapes. Spring swages: incorporate spring steel for self-opening action. All hardy tools must seat firmly without wobble.</p>
        
        <h3>File Making</h3>
        <p>Historical skill worth preserving: use 1095 or W1 steel for best results. Forge flat bar to desired dimensions, maintaining uniform thickness. Anneal completely for cutting teeth. Cut teeth with sharp cold chisel: angle 60° for general purpose, spacing depends on intended use - 20 teeth per inch for smooth files, 10 for rough. Case harden if using mild steel: pack in charcoal, heat to 1500°F for 2 hours. Harden fully, temper to light straw. Handle must fit securely - traditional tang design works best.</p>
        
        <h3>Measuring Tool Construction</h3>
        <p>Dividers: forge from 1/4" steel, rivet at center ensuring smooth movement. Calipers: similar construction but with curved legs for inside/outside measurement. Square: crucial for accuracy - forge from angle iron or fabricate from flat stock, check with proven square during assembly. Center punch: 60° point angle, harden tip, temper body. Scribe: similar to punch but with sharper angle (30°) for marking.</p>
        
        <h3>Tool Maintenance</h3>
        <p>Dress hammer faces regularly - mushroomed edges cause erratic blows. Keep tools oiled to prevent rust. Sharpen cutting tools frequently - sharp tools are safer. Store properly: rack for hammers, holder for tongs, protective covers for cutting edges. Inspect for cracks regularly, especially in striking tools. Replace handles at first sign of damage. Well-maintained tools last generations.</p>
      `
    },
    {
      id: 'advanced-techniques',
      title: 'Advanced Metalworking Techniques',
      icon: 'chapter-advanced.png',
      content: `
        <h2>Damascus Steel and Pattern Welding</h2>
        
        <h3>Understanding Damascus/Pattern Welded Steel</h3>
        <p>True Damascus (Wootz) steel is lost to history, but pattern welding creates similar aesthetic and performance. Combines different carbon steels: typically 1095 (high carbon) with 15N20 (nickel-bearing) for contrast. The nickel resists acid etching, creating visible patterns. Layer count affects pattern: start with 5-7 layers, forge weld, fold repeatedly. Each fold doubles layers: 7 layers folded 5 times yields 224 layers.</p>
        
        <h3>Forge Welding Preparation</h3>
        <p>Success requires absolute cleanliness: grind mating surfaces to bright metal immediately before welding. Stack alternating steels, tack weld edges or wire together leaving one end open for flux. Heat slowly to prevent uneven expansion. Apply anhydrous borax flux at red heat - it melts and seals surface from oxygen. Bring to welding temperature (2300°F+) - steel looks wet and throws white sparks.</p>
        
        <h3>Welding Technique</h3>
        <p>First weld sets success: use light, overlapping blows starting from center working outward to expel flux. Heavy blows initially can trap flux causing delamination. After initial weld, work at progressively lower temperatures. Draw out billet to double length, cut in half, restack. Clean between each welding cycle. Twist patterns: forge square bar, heat evenly, twist while hot. Ladder pattern: grind perpendicular grooves before final forging.</p>
        
        <h3>Japanese Sword Techniques</h3>
        <p>Traditional construction uses differential heat treatment: coat spine with clay mixture (clay, charcoal, ash) leaving edge exposed. This creates hamon (temper line) and sori (curve) during quenching. San mai construction: mild steel or iron core welded between high-carbon steel edges combines toughness with edge retention. Folding technique: start with tamahagane (bloom steel), fold repeatedly to homogenize and refine grain structure.</p>
        
        <h3>Mokume Gane</h3>
        <p>Japanese technique meaning "wood grain metal" - uses non-ferrous metals. Combine copper, brass, silver, nickel-silver in alternating sheets. Clean surfaces meticulously, stack with flux between. Heat in reducing atmosphere to below lowest melting point. Compress in vise or hydraulic press while hot. Pattern development: forge, file valleys, forge flat repeatedly. Creates wood-grain appearance in final product.</p>
        
        <h3>Case Hardening and Carburization</h3>
        <p>Adds carbon to iron or low-carbon steel surface. Pack piece in carbon-rich material: charcoal, bone meal, leather scraps. Seal in clay or steel container. Heat to 1650°F for 2-8 hours depending on desired depth. Quench directly from pack for maximum hardness. Color case hardening: add bone and wood charcoal for mottled blues, reds, browns. Results in hard wearing surface over tough core.</p>
        
        <h3>Inlay and Overlay Techniques</h3>
        <p>Wire inlay: cut groove with chisel or graver, slightly undercut edges. Insert wire (gold, silver, copper), hammer carefully to expand into undercuts. File flush when complete. Overlay (Koftgari): crosshatch surface with chisel, creating tooth. Apply gold or silver foil, burnish thoroughly into texture. Heat gently to improve adhesion. Both techniques require patience and practice for professional results.</p>
        
        <h3>Metal Finishing Techniques</h3>
        <p>Patination: controlled oxidation creates colors. Heat coloring: clean steel heated slowly shows progression from straw through purple to blue. Chemical patinas: ferric chloride for etching Damascus, copper sulfate for copper plating on steel, liver of sulfur for blackening silver. Japanese finishes: use stone powder (uchiko) for sword polishing, rice paste for rust prevention. Modern: Parkerizing, blueing, Cerakote for durability.</p>
      `
    },
    {
      id: 'safety-first-aid',
      title: 'Safety and Emergency Procedures',
      icon: 'chapter-safety.png',
      content: `
        <h2>Workshop Safety and First Aid</h2>
        
        <h3>Personal Protective Equipment</h3>
        <p>Safety glasses mandatory - hot scale and grinding sparks cause permanent eye damage. Side shields prevent peripheral injuries. Face shield for grinding operations. Leather apron protects torso from hot metal and sparks. Leather gloves for handling hot materials - never for forging (reduces hammer control). Closed-toe leather boots, preferably high-top to prevent ankle burns. Cotton or wool clothing only - synthetics melt to skin. Hearing protection essential during extended hammering or grinding.</p>
        
        <h3>Fire Prevention and Control</h3>
        <p>Keep ABC fire extinguisher within reach - know how to use it (PASS: Pull, Aim, Squeeze, Sweep). Never use water on metal fires - causes explosion with some metals. Maintain clear workspace: remove combustibles, sweep regularly. Quench bucket placement critical - between you and fire for emergency use. Hot metal looks identical to cold - mark or isolate hot pieces. Coal forge requires carbon monoxide detector - invisible, odorless, deadly. Adequate ventilation mandatory.</p>
        
        <h3>Burn Treatment</h3>
        <p>First degree (redness): Cool with water for 10+ minutes, apply aloe vera. Second degree (blisters): Cool with water, cover with sterile non-stick dressing, never pop blisters - infection risk. Third degree (white/charred): Medical emergency - call 911, cover with clean dry cloth, do not apply water or ointments. For all burns: remove jewelry immediately before swelling, never use ice (causes tissue damage), avoid butter/oil remedies. Monitor for shock symptoms.</p>
        
        <h3>Metal Fume Fever Prevention</h3>
        <p>Caused by zinc oxide fumes from galvanized steel or brass. Symptoms: flu-like, fever, chills, muscle aches starting 4-12 hours after exposure. Prevention: never heat galvanized materials, ensure adequate ventilation, use respirator when necessary. If exposed: fresh air immediately, hydrate well, symptoms usually resolve in 24-48 hours. Seek medical attention for severe symptoms or breathing difficulty.</p>
        
        <h3>Tool Safety</h3>
        <p>Inspect tools before each use: loose hammer heads kill, cracked handles fail catastrophically. Mushroomed striking surfaces create shrapnel - grind smooth immediately. Maintain proper angles on cutting tools - dull tools require excessive force. Store tools properly: edge guards on sharp tools, hanging storage prevents damage. Never strike hardened surfaces together - both may shatter. Use correct tool for job - improvisation causes accidents.</p>
        
        <h3>Chemical Hazards</h3>
        <p>Flux (borax) irritates respiratory system - use ventilation. Acid etching requires extreme caution: add acid to water (never reverse), use proper ventilation, wear chemical resistant gloves and face shield, keep neutralizing agent (baking soda) nearby. Quench oils create toxic smoke - work outdoors or with exhaust system. Lead exposure from reclaimed materials - test unknown metals, never heat lead-bearing materials. Keep Safety Data Sheets for all chemicals.</p>
        
        <h3>Emergency Procedures</h3>
        <p>Post emergency numbers prominently. First aid kit contents: burn gel, sterile dressings, eye wash, bandages, gloves, instant cold packs. Eye injuries: flush with water 15+ minutes, seek immediate medical attention. Severe cuts: direct pressure with clean cloth, elevate if possible, call 911 for arterial bleeding. Electric shock: disconnect power at source, check breathing/pulse, begin CPR if needed. Metal splinter: clean area, remove with sterilized tweezers, watch for infection.</p>
        
        <h3>Long-term Health Considerations</h3>
        <p>Repetitive strain: vary tasks, maintain good posture, strengthen supporting muscles. Hearing loss cumulative: always use protection. Respiratory health: use appropriate masks, ensure ventilation, avoid toxic materials. Skin protection: barrier creams for mild exposure, proper PPE for serious hazards. Regular health checkups important for early detection of occupational injuries.</p>
      `
    }
  ]
};

module.exports = guideContent;