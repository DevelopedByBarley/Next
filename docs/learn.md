

profile->page.tsx => /profile

// Nested Routes
profile->dashboard->page.tsx => /profile/dashboard 
           ->comments->page-sx => /profile/comments
           ->page.tsx => /profile

// Dynamic Routes
profile->page.tsx => /profile
           ->[id] => /profile/1

// Nested dynapic routes

profile->page.tsx => /profile
           ->[id]->reviews->[reviewId] => /profile/1/reviews/10


// Catch all segments

profile->page.tsx => /profile
           ->[..slug] => /profile/slug1/slug2/slug3/slug4
           ->[[...slug]] =>  /profile/slug1/slug2/slug3/slug4 -> A /profile müködik slug nélkül is (Optional chainingre szükség van ilyenkor)


// Route groups (Zárójelben a mappa neve az url-ben figyelmen kivül marad)
    (auth) -> login => /login 
               -> register => /register
               -> forgot-password => /forgot-password



Ep 27 

Ha error filet rakunk a layout mellé az nem jó , feljebb kell helyezni a parent folderbe