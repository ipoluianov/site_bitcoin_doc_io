<template>
    <div style="text-align: left; display: flex; flex-direction: column; !max-width: 300px;">
        <div class="block">
            <button @click="generate">GENERATE</button>
        </div>
        <div class="block">
            <div class="header">Address - BECH32</div>
            <div class="content">
                <pre>{{ addr_bech32 }}</pre>
            </div>
        </div>

        <div class="block">
            <div class="header">Address - P2PKH</div>
            <div class="content">
                <pre>{{ addr_p2pkh }}</pre>
            </div>
        </div>

        <div class="block">
            <div class="header">Private Key (WIF)</div>
            <div class="content">
                <pre>{{ privateKeyUc }}</pre>
            </div>
        </div>

        <div class="block">
            <div class="header-small">privateKeyC</div>
            <div class="content-small">
                <pre>{{ privateKeyC }}</pre>
            </div>
        </div>

        <div class="block">
            <div class="header-small">Public Key Compressed</div>
            <div class="content-small">
                {{ publicKeyC }}
            </div>
        </div>

        <div class="block">
            <div class="header-small">Address - P2PKH - HEX</div>
            <div class="content-small">
                <pre>{{ addr_p2pkh_hex }}</pre>
            </div>
        </div>


        <div class="block">
            <div class="header-small">addr_p2sh</div>
            <div class="content-small">
                <pre>{{ addr_p2sh }}</pre>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            privateKeyC: "",
            privateKeyUc: "",
            publicKeyC: "",
            publicKeyUc: "",
            addr_p2pkh_hex: "",
            addr_p2pkh: "",
            addr_bech32: "",
            addr_p2sh: "",
        };
    },
    methods: {
        async generate() {
            console.log("123");
            try {
                const response = await fetch('https://u00.io:8488/api/bitcoin/generate_keys',);
                const json = await response.json();
                console.log(json)

                this.privateKeyC = json.private_key_c;
                this.privateKeyUc = json.private_key_u;
                this.publicKeyC = json.public_key_compressed;
                this.publicKeyUc = json.public_key_uncompressed;
                this.addr_p2pkh_hex = json.address_p2pkh_hex;
                this.addr_p2pkh = json.address_p2pkh;
                this.addr_bech32 = json.address_bech32;
                this.addr_p2sh = json.address_p2sh;
            } catch (error) {

                console.error(error);
            }
            console.log("---");
        },
    }
}
</script>

<style scoped>
.block {
    max-width: 300px;
}

.header {
    font-size: 24pt;
}

.content {
    margin-bottom: 10px;
    font-size: 14pt;
}

.header-small {
    font-size: 16pt;
}

.content-small {
    font-size: 10pt;
}
</style>