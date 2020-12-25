<template>
<div class="container mx-auto  bg-gray-50 md:p-6 p-3 rounded-lg">
    <div>
        <h1 class="text-3xl mb-4 p-2">Tevékenységünk</h1>

        <h2 class="text-xl my-4">Amit közösen létrehoztunk</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">

    <Tcard
    tsrc="tevekenyseg/felnott_szinjatszok.jpg"
    cardtitle="Felnőtt színjátszás"
    cardtext="Az amatőr felnőtt színjátszó csoport 2012 óta működik. Leginkább komédiákat adunk elő, számos helyen felléptünk már."
    />

   <Tcard
    tsrc="tevekenyseg/gyermek_szinjatszok.jpg"
    cardtitle="Gyermek színjátszás"
    cardtext="Az amatőr gyermek színjátszó csoport 2012 óta működik. A gyerekek minden évben egy új zenés, táncos, jelmezes színdarabot tanulnak meg. Leggyakrabban iskoláknak, óvodáknak mutatjuk be az előadásokat."
    />

    <Tcard
    tsrc="tevekenyseg/rendezvenyek.jpg"
    cardtitle="Rendezvények, műsorok"
    cardtext="Az egyesület önkéntesei változatos kulturális műsoraikkal színesítik a térség életét."
    />

    </div>
</div>
</template>