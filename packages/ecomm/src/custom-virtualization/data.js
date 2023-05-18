let dataOffsetSize = 20;

const data = [{
    "code": "469273881009",
    "name": "Heathered Slim Fit Flat-Front Chinos",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220906/0ve5/6317687baeb269dbb374b375/british_club_grey_heathered_slim_fit_flat-front_chinos.jpg"
}, {
    "code": "469129507002",
    "name": "Lace-Up Ankle-Length Boots",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221004/3r3t/633c4831f997ddfdbd06fa54/el_paso_brown_lace-up_ankle-length_boots.jpg"
}, {
    "code": "441128206004",
    "name": "Shirt with Mandarin Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211009/dlCy/6161d8a6aeb2692b85c2845f/netplay_navy_blue_shirt_with_mandarin_collar.jpg"
}, {
    "code": "469157895023",
    "name": "Acid-Wash Slim Fit Jeans",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220317/4ExL/62323f25aeb26921afded401/the_indian_garage_co_blue_acid-wash_slim_fit_jeans.jpg"
}, {
    "code": "465934110001",
    "name": "Contrast Striped Polo T-Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230317/0U8h/64142daef997dde6f404dc72/ausk_white_contrast_striped_polo_t-shirt.jpg"
}, {
    "code": "469484662005",
    "name": "Cargo Jogger Pants with Drawstring Waist",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230418/NJlE/643eb4cf907deb497aed5493/british_club_grey_cargo_jogger_pants_with_drawstring_waist.jpg"
}, {
    "code": "462329145004",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221117/k3qL/6375d6bdf997ddfdbd7fae30/dennislingo_premium_attire_green_slim_fit_shirt_with_patch_pocket.jpg"
}, {
    "code": "441127001015",
    "name": "Micro Print Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210916/OseQ/61427e3ff997ddce89c8521f/netplay_white_micro_print_shirt_with_patch_pocket.jpg"
}, {
    "code": "441127005019",
    "name": "Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211027/73hq/61784934aeb2690110aa6b6c/netplay_blue_shirt_with_patch_pocket.jpg"
}, {
    "code": "465069183003",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/Dcq1/636b9189aeb269659c7fd7c0/dennislingo_premium_attire_grey_checked_slim_fit_shirt.jpg"
}, {
    "code": "465592876003",
    "name": "Colourblock Crew-Neck T-Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230112/gtFV/63bf2013aeb269c651d978d8/ausk_multicoloured_colourblock_crew-neck_t-shirt.jpg"
}, {
    "code": "465306185001",
    "name": "Flat-Front Trousers with Insert Pockets",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221119/Zd5D/6377f216f997ddfdbd85a222/ivoc_white_flat-front_trousers_with_insert_pockets.jpg"
}, {
    "code": "441140119024",
    "name": "Slim Fit Flat-Front Chinos with Belt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220628/8SPb/62bb24a2f997dd03e2a52942/netplay_blue_slim_fit_flat-front_chinos_with_belt.jpg"
}, {
    "code": "462323964033",
    "name": " Slim Fit Shirt with Spread Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/61kh/636b8ebaf997ddfdbd664273/dennislingo_premium_attire_purple__slim_fit_shirt_with_spread_collar.jpg"
}, {
    "code": "465569055001",
    "name": "Pack of 5 Ankle-Length Socks",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230302/j4iK/6400c4d9aeb26924e3a20747/one8_multicoloured_pack_of_5_ankle-length_socks.jpg"
}, {
    "code": "441213932003",
    "name": "Button-Down Hoodie with Placement Brand Print",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230207/Dc1L/63e27bc2aeb269c65116a7db/lee_cooper_indigo_button-down_hoodie_with_placement_brand_print.jpg"
}, {
    "code": "465836193001",
    "name": "Colourblock Shirt with Spread Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230228/NgdF/63fd0de0aeb26924e395a317/campus_sutra_multicoloured_colourblock_shirt_with_spread_collar.jpg"
}, {
    "code": "441140297010",
    "name": "Ankle-Length Flat-Front Trousers",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220825/LnqT/63069b61f997dd394c1ee49a/netplay_navy_blue_ankle-length_flat-front_trousers.jpg"
}, {
    "code": "465629476002",
    "name": "Printed Slim Fit Shirt with Spread Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230119/1uns/63c961f6aeb269c651eb7b45/snitch_black_printed_slim_fit_shirt_with_spread_collar.jpg"
}, {
    "code": "441140112013",
    "name": "Flat-Front Shorts with Insert Pockets",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220817/7Kvh/62fd0bddf997dd394cfefc0c/netplay_black_flat-front_shorts_with_insert_pockets.jpg"
}, {
    "code": "461655541003",
    "name": "Checked Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/JX26/627e20e6aeb26921af768b7d/the_bear_house_black_checked_shirt_with_patch_pocket.jpg"
}, {
    "code": "461125151002",
    "name": "Shirt with Curved Hemline",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220121/XNDG/61ea64b3aeb2695cdd24fb24/gespo_black_shirt_with_curved_hemline.jpg"
}, {
    "code": "460827898005",
    "name": "Lightly Washed Low-Rise Slim Fit Jeans",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210316/tSU2/6050ca90aeb269698187e930/the_indian_garage_co_blue_lightly_washed_low-rise_slim_fit_jeans.jpg"
}, {
    "code": "466014512002",
    "name": "Graphic Print Crew-Neck T-Shirt ",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230403/xQZW/642af6e7907deb497ac6c8f3/bewakoof_purple_graphic_print_crew-neck_t-shirt_.jpg"
}, {
    "code": "460827893002",
    "name": "Acid Mid-Wash Low-Rise Slim Fit Jeans",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210316/quE9/6050cd63f997dd5c4013b9ec/the_indian_garage_co_blue_acid_mid-wash_low-rise_slim_fit_jeans.jpg"
}, {
    "code": "464957923004",
    "name": "Striped Crew-Neck T-shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220908/XRfc/631910bbf997dd1f8dec9a54/ausk_white_striped_crew-neck_t-shirt.jpg"
}, {
    "code": "463938180004",
    "name": "Polo T-shirt with Welt Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220304/R2AD/62214fd1aeb26921afc77f87/ausk_peach_%26_white_polo_t-shirt_with_welt_pocket.jpg"
}, {
    "code": "441128206008",
    "name": "Striped Shirt with Mandarin Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210913/dRyc/613f789e7cdb8cb8242024ff/netplay_white_striped_shirt_with_mandarin_collar.jpg"
}, {
    "code": "461118587001",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/tsRn/636b8d0bf997ddfdbd661046/dennislingo_premium_attire_white_slim_fit_shirt_with_patch_pocket.jpg"
}, {
    "code": "462631373001",
    "name": " Collar-Neck Jacket with Insert Pockets",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210805/m4wO/610ae723f997ddce8994e34e/voxati_green__collar-neck_jacket_with_insert_pockets.jpg"
}, {
    "code": "441297805003",
    "name": "Mid-Wash Slim Fit Jeans",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220909/UlLf/631a3d84aeb269dbb37b99ab/lee_cooper_denim_blue_mid-wash_slim_fit_jeans.jpg"
}, {
    "code": "462067313003",
    "name": "Checked Button-down Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/2a7U/627e22b4f997dd03e2b9a1f2/the_bear_house_blue_checked_button-down_shirt.jpg"
}, {
    "code": "441121566003",
    "name": "Striped Slim Fit Polo T-shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211125/YmQ5/619fa774aeb2690110d8355a/netplay_blue_striped_slim_fit_polo_t-shirt.jpg"
}, {
    "code": "461119027004",
    "name": "Slim Fit Shirt with Band Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/iFud/636b8ebaf997ddfdbd664270/dennislingo_premium_attire_pink_slim_fit_shirt_with_band_collar.jpg"
}, {
    "code": "441140124014",
    "name": "Tapered Fit Flat-Front Chinos",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220817/5mqM/62fd2c38aeb269176180f7a0/netplay_khaki_tapered_fit_flat-front_chinos.jpg"
}, {
    "code": "469163740006",
    "name": "Low-Top Lace-Up Shoes with Overlays",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221004/bK9I/633b3275f997ddfdbd058557/arbunore_white_low-top_lace-up_shoes_with_overlays.jpg"
}, {
    "code": "461571257004",
    "name": "Striped Crew-Neck T-shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220121/e7Gl/61ea592eaeb2695cdd243ef4/gespo_blue_striped_crew-neck_t-shirt.jpg"
}, {
    "code": "460453608001",
    "name": "Striped Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220212/x7rQ/6206bf77f997dd03e2ccc8ce/the_indian_garage_co_olive_green_striped_slim_fit_shirt_with_patch_pocket.jpg"
}, {
    "code": "469161771002",
    "name": "Round-Toe Lace-Up Running Shoes",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220315/JRNU/6230b189aeb26921afda0ce9/duke_black_round-toe_lace-up_running_shoes.jpg"
}, {
    "code": "460698919001",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210316/US2Q/604fb159f997dd5c401159c2/the_indian_garage_co_black_checked_slim_fit_shirt_with_patch_pocket.jpg"
}, {
    "code": "465898174006",
    "name": "Track Pants with Drawstring Waist",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230314/Ma65/640fa09ff997dde6f4f73344/glito_grey_track_pants_with_drawstring_waist.jpg"
}, {
    "code": "441103976011",
    "name": "Striped Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20201017/FNu0/5f89e758f997dd8c836a1d0a/netplay_beige_striped_slim_fit_shirt_with_patch_pocket.jpg"
}, {
    "code": "465960612005",
    "name": "Colour-block Regular Fit Polo T-shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230322/TZxa/641ae8f3907deb497aa4b606/gespo_teal_colour-block_regular_fit_polo_t-shirt.jpg"
}, {
    "code": "469431484001",
    "name": "Low-Top Lace-Up Shoes",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230418/Wpl5/643ec7e7711cf97ba730db2b/arbunore_white_low-top_lace-up_shoes.jpg"
}, {
    "code": "460494896005",
    "name": "Mid-Top Colourblock Lace-Up Sneakers",
    "image": "https://assets.ajio.com/medias/sys_master/root/h7f/hf9/14907675443230/go21_white_mid-top_colourblock_lace-up_sneakers.jpg"
}, {
    "code": "466003699006",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230403/kWZe/6429f50c711cf97ba703d529/the_bear_house_white_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "461119035005",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/c7a3/636b8e16aeb269659c7f7c15/dennislingo_premium_attire_white_checked_slim_fit_shirt.jpg"
},
{
    "code": "460698901001",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20200902/qaFd/5f4e97cff997dd6918b1e9b3/the_indian_garage_co_navy_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142683075",
    "name": "Slim Fit Shirt with Flap Pockets",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220603/JaJx/629928f6f997dd03e25eee6a/john_players_jeans_black_slim_fit_shirt_with_flap_pockets.jpg"
},
{
    "code": "469273872008",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220906/uKgv/63175e1df997dd1f8de75a78/british_club_red_%26_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "460453612005",
    "name": "Striped Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211228/s1km/61ca36a4aeb26901101f7577/the_indian_garage_co_white_striped_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "461124702001",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220819/Qm9w/62fe856aaeb269176183efe0/ivoc_black_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "465878819004",
    "name": "Slim Fit Shirt with Mandarin Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230309/wmHG/64091df7f997dde6f4eb4ad2/trythis_navy_blue_slim_fit_shirt_with_mandarin_collar.jpg"
},
{
    "code": "460698946005",
    "name": "Checked Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210316/wTvc/604fba47aeb2696981866118/the_indian_garage_co_grey_checked_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142086008",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220610/sEYu/62a24722f997dd03e26f96ee/netplay_khaki_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "460698929004",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20200902/TPrI/5f4e984baeb269ef8eb51dfc/the_indian_garage_co_maroon_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441143062027",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220704/XaQf/62c300f8aeb26921af5f0107/dnmx_grey_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "464530917003",
    "name": "Floral Print Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220623/4W2n/62b38076f997dd03e2992d2e/snitch_black_floral_print_slim_fit_shirt.jpg"
},
{
    "code": "441243364004",
    "name": "Shirt with Flap Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220611/DtWa/62a39377f997dd03e27165dc/lee_cooper_mustard_shirt_with_flap_pocket.jpg"
},
{
    "code": "441136994001",
    "name": "NP 06 FS Slim Fit Shirt with Band Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220208/PqH7/62016dddf997dd03e2c4744f/netplay_olive_green_np_06_fs_slim_fit_shirt_with_band_collar.jpg"
},
{
    "code": "463236990004",
    "name": "Solid Regular Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211028/woT8/6179bc2ff997ddf8f1ee48ee/louis_monarch_dark_green_solid_regular_fit_shirt.jpg"
},
{
    "code": "461150789004",
    "name": "Floral Print Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220819/U6Hn/62fe946daeb26917618468eb/bene_kleed_cream_floral_print_slim_fit_shirt.jpg"
},
{
    "code": "461118544005",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/0Xvw/636b8d94f997ddfdbd662124/dennislingo_premium_attire_sky_blue_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142098005",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220521/V9T9/62886370aeb26921afb6627b/netplay_navy_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441127005023",
    "name": "Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211027/73hq/61784934aeb2690110aa6b6c/netplay_blue_shirt_with_patch_pocket.jpg"
},
{
    "code": "462329145003",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221117/k3qL/6375d6bdf997ddfdbd7fae30/dennislingo_premium_attire_green_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "465811489003",
    "name": "Checked Slim Fit Hooded Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230322/96FN/641ae0a4907deb497aa39771/lewel_olive_checked_slim_fit_hooded_shirt.jpg"
},
{
    "code": "441146963001",
    "name": "Floral Print Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220927/uhIK/63330e8daeb269dbb3aa5a9e/netplay_white_floral_print_slim_fit_shirt.jpg"
},
{
    "code": "460868127005",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210325/vXXn/605b8d577cdb8c1f146c94ab/the_indian_garage_co_white_checked_slim_fit_shirt.jpg"
},
{
    "code": "441145259012",
    "name": "NP35 BSC Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220729/eAYd/62e4039caeb26921afacadc3/netplay_multicoloured_np35_bsc_checked_slim_fit_shirt.jpg"
},
{
    "code": "469063066086",
    "name": "Checked Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211210/0uwu/61b25c21aeb26901100550f9/the_indian_garage_co_white_checked_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142083005",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220419/EuFh/625dc503aeb26921af2992ac/netplay_olive_green_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "463480926001",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/0M1l/627e2528aeb26921af76e258/the_bear_house_pink_checked_slim_fit_shirt.jpg"
},
{
    "code": "441143264011",
    "name": "Chain Stitched Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220702/6Poy/62bf6aa8f997dd03e2b2f881/netplay_navy_blue_chain_stitched_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "464175704003",
    "name": "Striped Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/16r3/627e2636aeb26921af76f753/the_bear_house_brown_striped_slim_fit_shirt.jpg"
},
{
    "code": "462067313004",
    "name": "Checked Button-down Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/2a7U/627e22b4f997dd03e2b9a1f2/the_bear_house_blue_checked_button-down_shirt.jpg"
},
{
    "code": "441142105001",
    "name": "Striped Slim Fit Shirt with Band Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220630/NdTH/62bdc094f997dd03e2ac4cf6/netplay_white_striped_slim_fit_shirt_with_band_collar.jpg"
},
{
    "code": "441351486005",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220714/jKV9/62d0432aaeb26921af7ac6e8/lee_cooper_olive_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "463545445005",
    "name": "Floral Printed Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/3xFg/627e2531aeb26921af76e322/the_bear_house_white_floral_printed_slim_fit_shirt.jpg"
},
{
    "code": "464962529003",
    "name": "Jaipuri Printed Cotton Shirt With Spread Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230328/8uUL/6422fc66711cf97ba7f6475e/tistabene_white_jaipuri_printed_cotton_shirt_with_spread_collar.jpg"
},
{
    "code": "441142126013",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220527/aUXp/62905373f997dd03e2380160/netplay_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "461150256005",
    "name": "Slim Fit Shirt with Flap Pockets",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220818/22eZ/62fde1bdf997dd394c018b73/ivoc_olive_green_slim_fit_shirt_with_flap_pockets.jpg"
},
{
    "code": "460698931004",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210316/9BZV/604fbeebf997dd5c4011932a/the_indian_garage_co_green_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "461125151001",
    "name": "Shirt with Curved Hemline",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220121/XNDG/61ea64b3aeb2695cdd24fb24/gespo_black_shirt_with_curved_hemline.jpg"
},
{
    "code": "464007586002",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/TEq0/627e2452f997dd03e2b9c3dc/the_bear_house_maroon_checked_slim_fit_shirt.jpg"
},
{
    "code": "441128206005",
    "name": "Shirt with Mandarin Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211009/dlCy/6161d8a6aeb2692b85c2845f/netplay_navy_blue_shirt_with_mandarin_collar.jpg"
},
{
    "code": "441142083017",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220419/aTTk/625dc133aeb26921af2980c7/netplay_navy_blue_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "461655770001",
    "name": "Striped Button-Down Collar Shirt ",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/lFHx/627e204df997dd03e2b96d1b/the_bear_house_beige_striped_button-down_collar_shirt_.jpg"
},
{
    "code": "469157903043",
    "name": "Spread Collar Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220312/MrWl/622bbe86aeb26921afd4b25e/the_indian_garage_co_orange_spread_collar_shirt_with_patch_pocket.jpg"
},
{
    "code": "463633516003",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/uxVC/627e237cf997dd03e2b9b21b/the_bear_house_grey_checked_slim_fit_shirt_with_patch_pocket.jpg"
}, {
    "code": "469157903009",
    "name": "Spread Collar Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220312/JQy1/622bc0cef997dd03e20f0929/the_indian_garage_co_black_spread_collar_shirt_with_patch_pocket.jpg"
},
{
    "code": "441146597015",
    "name": "Micro Print Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220706/M4oT/62c5a12cf997dd03e2bf888f/netplay_navy_blue_micro_print_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "420434661003",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230301/3LTe/63ff8b49aeb26924e39cdf3c/breakpoint_lime_green_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "462323964056",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221117/4HfY/6375d6c2aeb269659c97eee1/dennislingo_premium_attire_indigo_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "462323964001",
    "name": "Classic Slim Fit Shirt with Full Sleeves",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/eAT0/636b8f92aeb269659c7fa373/dennislingo_premium_attire_blue_classic_slim_fit_shirt_with_full_sleeves.jpg"
},
{
    "code": "463292644005",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/xlLS/627e266eaeb26921af76fba2/the_bear_house_grey_checked_slim_fit_shirt.jpg"
},
{
    "code": "469264647053",
    "name": "Cotton Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221001/Juzt/6337488df997ddfdbd001f16/the_indian_garage_co_green_cotton_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "461118587002",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/tsRn/636b8d0bf997ddfdbd661046/dennislingo_premium_attire_white_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "463625411006",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/9c8B/627e23eff997dd03e2b9bbd8/the_bear_house_multi_checked_slim_fit_shirt.jpg"
},
{
    "code": "441142101006",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220610/qpPm/62a24ce2aeb26921af1a2bcc/netplay_red_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441143262007",
    "name": "Printed Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220601/V8Sq/6296aedcf997dd03e2546ef5/netplay_white_%26_blue_printed_slim_fit_shirt.jpg"
},
{
    "code": "465286413002",
    "name": "Checked Spread-Collar Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221116/iS7O/6374090af997ddfdbd7866ba/harpita_white_checked_spread-collar_shirt.jpg"
},
{
    "code": "441143253003",
    "name": "Floral Print Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220623/2UJr/62b4ae6cf997dd03e29a79b2/netplay_white_floral_print_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441145251008",
    "name": "Striped Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220905/GCPJ/6315e72caeb269dbb36b6940/netplay_navy_blue_striped_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "461646700001",
    "name": "Checked Classic Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/fDhq/627e2197aeb26921af769a97/the_bear_house_olive_checked_classic_slim_fit_shirt.jpg"
},
{
    "code": "469484652009",
    "name": "Printed Slim Fit Shirt with Spread Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230418/vxeb/643eabc5711cf97ba730351c/british_club_peach_printed_slim_fit_shirt_with_spread_collar.jpg"
},
{
    "code": "465812611004",
    "name": "Checked Slim Fit Hooded Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230322/Ff4w/641ae347907deb497aa3f554/lewel_white_checked_slim_fit_hooded_shirt.jpg"
},
{
    "code": "441145254006",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220809/h9nQ/62f288c2f997dd03e234ebed/netplay_rust_orange_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142083012",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220419/2tRL/625db059f997dd03e266b8eb/netplay_maroon_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142086012",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220610/sEYu/62a24722f997dd03e26f96ee/netplay_khaki_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441145253019",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220823/tzWT/6303e7ffaeb26917619190e9/netplay_brown_%26_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441138636020",
    "name": "Tropical Print Trim Fit Cotton Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220823/kQtk/6303d972f997dd394c103830/john_players_jeans_brown_tropical_print_trim_fit_cotton_shirt.jpg"
},
{
    "code": "460698898001",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20210316/TIPl/604faba1f997dd5c401134c8/the_indian_garage_co_navy_blue_%26_green_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "462323964036",
    "name": " Classic Slim Fit Shirt with Spread Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221117/gSof/6375d71caeb269659c97f8fe/dennislingo_premium_attire_rose_gold__classic_slim_fit_shirt_with_spread_collar.jpg"
},
{
    "code": "441127004004",
    "name": "Checked Shirt with Band Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211123/7ln2/619be77bf997ddf8f112643c/netplay_navy_blue_checked_shirt_with_band_collar.jpg"
},
{
    "code": "441146596009",
    "name": "NP03 Floral Print Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220729/wgxd/62e3fef7f997dd03e208c26b/netplay_navy_blue_np03_floral_print_slim_fit_shirt.jpg"
},
{
    "code": "462323964075",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/YFKx/636b9000aeb269659c7faee0/dennislingo_premium_attire_olive_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441294288001",
    "name": "Checked Slim Fit Shirt with Flap Pockets",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220803/u2l0/62ea96e3aeb26921afc2f7f6/lee_cooper_indigo_checked_slim_fit_shirt_with_flap_pockets.jpg"
},
{
    "code": "441142083023",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220503/mgCU/62702f9caeb26921af4f5fdd/netplay_khaki_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "460698918001",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20200821/wY6R/5f3fe4b37cdb8ca2cf9ee1ca/the_indian_garage_co_white_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "410142259008",
    "name": "Slim Fit Shirt with Buttoned Cuffs",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220316/jzWT/6231fecef997dd03e21905bd/armani_exchange_navy_slim_fit_shirt_with_buttoned_cuffs.jpg"
},
{
    "code": "464879851006",
    "name": "Striped Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220825/6pmj/6306a637f997dd394c201b13/the_bear_house_blue_striped_shirt_with_patch_pocket.jpg"
},
{
    "code": "463405468001",
    "name": "Solid Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/LjSc/627e2482f997dd03e2b9c7c2/the_bear_house_olive_solid_slim_fit_shirt.jpg"
},
{
    "code": "465969969004",
    "name": "Paisley Print Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230324/ZS9R/641d74be711cf97ba7ecb73d/lewel_black_paisley_print_slim_fit_shirt.jpg"
},
{
    "code": "441145250007",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220706/jeF1/62c48c9caeb26921af6548fe/netplay_khaki_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "469442598006",
    "name": "Slim Fit Shirt with Flap Pockets",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230210/ybwX/63e65b96aeb26924e3682481/british_club_grey_slim_fit_shirt_with_flap_pockets.jpg"
},
{
    "code": "441142107011",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220523/OxQk/628bce7aaeb26921afca0a7c/netplay_maroon_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "420180661004",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220729/fciD/62e3ffd8f997dd03e208c7aa/ntwk_white_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "469435561009",
    "name": "Textured Cotton Linen Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230420/gcyF/6441529e907deb497af70117/buda_jeans_co_beige_textured_cotton_linen_shirt_with_patch_pocket.jpg"
},
{
    "code": "441146963002",
    "name": "Floral Print Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220927/uhIK/63330e8daeb269dbb3aa5a9e/netplay_white_floral_print_slim_fit_shirt.jpg"
},
{
    "code": "441146589002",
    "name": "NP35 BSC Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220729/0cer/62e3ff5daeb26921afac999c/netplay_khaki_np35_bsc_checked_slim_fit_shirt.jpg"
},
{
    "code": "465266368003",
    "name": "Striped Short-Sleeve Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221111/bCrX/636d626ef997ddfdbd6de6f6/campus_sutra_blue_striped_short-sleeve_shirt.jpg"
},
{
    "code": "461125300001",
    "name": "Cotton Shirt with Mandarin Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220121/jo5N/61ea5aa8f997dd66233145ab/gespo_white_cotton_shirt_with_mandarin_collar.jpg"
},
{
    "code": "469129378001",
    "name": "Gingham Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220301/2wQc/621e3d77aeb26921afbf2103/british_club_green_%26_white_gingham_checked_slim_fit_shirt.jpg"
},
{
    "code": "441213742003",
    "name": "Striped Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211228/O5YK/61ca38ddf997ddf8f164aeba/lee_cooper_white_striped_shirt_with_patch_pocket.jpg"
}, {
    "code": "441146598007",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220817/ZySE/62fcfdccf997dd394cfeaa33/netplay_red_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441146945008",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220809/exPr/62f298b4f997dd03e2355449/dnmx_beige_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441136997003",
    "name": "Micro Print Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220429/BkGc/626bf86aaeb26921af4bb811/netplay_white_micro_print_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441143254002",
    "name": "Micro Print Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220623/tNxi/62b49aaff997dd03e29a045c/netplay_white_micro_print_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "420434702001",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230313/qyfl/640f65b5f997dde6f4f5562c/breakpoint_green_checked_slim_fit_shirt.jpg"
},
{
    "code": "465736529005",
    "name": "Printed Shirt with Curved Hemline",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230321/tWmW/64195248f997dde6f41b1dbf/tistabene_green_printed_shirt_with_curved_hemline.jpg"
},
{
    "code": "462773657026",
    "name": "Spread Collar Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221117/RX1l/6375d74faeb269659c97fe84/dennislingo_premium_attire_black_spread_collar_slim_fit_shirt.jpg"
},
{
    "code": "469040197001",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20211123/Jw93/619d02f0aeb2690110d2f7a2/ketch_navy_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441145505005",
    "name": "Core Oxford Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220628/oyFk/62bb1baeaeb26921af4d4daa/netplay_white_core_oxford_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "465811491004",
    "name": "Checked Slim Fit Hooded Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230322/mIAh/641affd2711cf97ba7e611ec/lewel_black_checked_slim_fit_hooded_shirt.jpg"
},
{
    "code": "469368031015",
    "name": "Cut-Away Collar Patched-Pocket Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221116/sZuu/6374d9afaeb269659c939fa3/u.s._polo_assn._white_cut-away_collar_patched-pocket_shirt.jpg"
},
{
    "code": "441136994024",
    "name": "NP 06 FS Slim Fit Shirt with Band Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220208/4xFY/62017cbdaeb26921af8d919a/netplay_red_np_06_fs_slim_fit_shirt_with_band_collar.jpg"
},
{
    "code": "462108441001",
    "name": "Slim Fit Shirt with Checked Detail",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/dQk9/636b8ff3aeb269659c7fad7e/dennislingo_premium_attire_green_slim_fit_shirt_with_checked_detail.jpg"
},
{
    "code": "420371506001",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220623/lh38/62b4a511f997dd03e29a44ee/breakpoint_blue_checked_slim_fit_shirt.jpg"
},
{
    "code": "462323964041",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/h1jU/636b8d0bf997ddfdbd66104e/dennislingo_premium_attire_yellow_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "462122156029",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20221109/wQIJ/636b8e9af997ddfdbd663ee8/dennislingo_premium_attire_yellow_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "460698960001",
    "name": "Floral Print Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20200821/N86e/5f3fe4b37cdb8ca2cf9ee1c8/the_indian_garage_co_white_%26_peach_floral_print_slim_fit_shirt.jpg"
},
{
    "code": "441145258008",
    "name": "Checked Slim Fit Shirt with Band Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220922/GsAz/632b5fdfaeb269dbb39d96bc/netplay_navy_blue_checked_slim_fit_shirt_with_band_collar.jpg"
},
{
    "code": "469234314004",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220629/Gyih/62bc04acaeb26921af4f4fe3/british_club_white_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "420325377001",
    "name": "Printed Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230217/lZHK/63ef9acbf997dde6f4ae3178/ntwk_maroon_printed_slim_fit_shirt.jpg"
},
{
    "code": "464795498005",
    "name": "Cotton Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220810/XlLY/62f2e46af997dd03e236f29c/dillinger_white_cotton_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142083016",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220419/aTTk/625dc133aeb26921af2980c7/netplay_navy_blue_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "469063068116",
    "name": "Floral Print Shirt with Spread Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220118/nZBS/61e5b912aeb2695cdd19d7f4/the_indian_garage_co_orange_floral_print_shirt_with_spread_collar.jpg"
},
{
    "code": "463378832004",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/W2B4/627e2686aeb26921af76fd12/the_bear_house_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142088003",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220528/XxVO/629141d5aeb26921afee6f34/netplay_navy_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "469234312007",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220629/yIxu/62bc0163aeb26921af4f432f/british_club_green_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "464967405005",
    "name": "Stripes Full-Sleeves Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220910/Wd50/631bad46aeb269dbb380755b/the_bear_house_multi_stripes_full-sleeves_shirt.jpg"
},
{
    "code": "464344209005",
    "name": "Geometric Print Cotton Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220802/CZyi/62e8d37ff997dd03e216f82d/tistabene_white_geometric_print_cotton_shirt_with_patch_pocket.jpg"
},
{
    "code": "441143255009",
    "name": "Micro Print Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220531/FH51/629598dfaeb26921affb0589/netplay_navy_blue_micro_print_slim_fit_shirt.jpg"
},
{
    "code": "469129415002",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220225/X2RE/6217f230aeb26921afb6d7f8/british_club_black_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441298736010",
    "name": "Printed Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220916/yEO3/63239a3faeb269dbb38e9c18/lee_cooper_beige_printed_slim_fit_shirt.jpg"
},
{
    "code": "441142122002",
    "name": "Striped Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220720/GQqR/62d6fa35f997dd03e2e09820/netplay_white_striped_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "465878819001",
    "name": "Slim Fit Shirt with Mandarin Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230309/3rbd/640a1eb2f997dde6f4ed57c1/trythis_black_slim_fit_shirt_with_mandarin_collar.jpg"
},
{
    "code": "465878819026",
    "name": "Slim Fit Shirt with Band Collar",
    "image": "https://assets.ajio.com/medias/sys_master/root/20230331/gEyO/64270096907deb497ac0f291/trythis_yellow_slim_fit_shirt_with_band_collar.jpg"
},
{
    "code": "441138739011",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220528/18aa/629157e0aeb26921afeec682/john_players_jeans_white_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441146597002",
    "name": "Checked Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220630/JDUe/62bca247f997dd03e2aa0003/netplay_white_checked_slim_fit_shirt.jpg"
},
{
    "code": "469129444001",
    "name": "Floral Print Slim Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220301/7TCB/621e38c6aeb26921afbf0c07/british_club_grey_floral_print_slim_shirt_with_patch_pocket.jpg"
},
{
    "code": "463838658003",
    "name": "Checks Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220513/v0yy/627e2477aeb26921af76d3dc/the_bear_house_black_checks_slim_fit_shirt.jpg"
},
{
    "code": "410327059005",
    "name": "Cotton Slim Fit Shirt",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220727/Q6GZ/62e039a4f997dd03e2f9b66b/armani_exchange_white_cotton_slim_fit_shirt.jpg"
},
{
    "code": "460453608004",
    "name": "Striped Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220212/x7rQ/6206bf77f997dd03e2ccc8ce/the_indian_garage_co_olive_green_striped_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "469194722001",
    "name": "Checked Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220603/nYlG/62992604aeb26921af09e344/the_indian_garage_co_teal_blue_checked_shirt_with_patch_pocket.jpg"
},
{
    "code": "441146594003",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220817/lHeF/62fd197bf997dd394cff4a33/netplay_navy_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142648076",
    "name": "Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220725/3zvs/62debe11aeb26921af99ad81/john_players_white_slim_fit_shirt_with_patch_pocket.jpg"
},
{
    "code": "464795559002",
    "name": "Cotton Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220810/GLN3/62f2e20ff997dd03e236d951/dillinger_green_cotton_shirt_with_patch_pocket.jpg"
},
{
    "code": "441142110001",
    "name": "Checked Slim Fit Shirt with Patch Pocket",
    "image": "https://assets.ajio.com/medias/sys_master/root/20220630/3KZY/62bdba75aeb26921af542448/netplay_khaki_%26_blue_checked_slim_fit_shirt_with_patch_pocket.jpg"
}
]








// const products = format.products;

// const res = [];

// for (let { code, name, images } of products) {
//     res.push({
//         code,
//         name,
//         image: images[0].url
//     })
// }

// console.log(JSON.stringify(res));

export default data;



