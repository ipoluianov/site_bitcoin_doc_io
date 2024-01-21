<template>
    <div style="text-align: left; display: flex; flex-direction: column;">
        <div class="block">
            <div class="header">Address - BECH32</div>
            <div class="content">
                {{ addr_bech32 }}
            </div>
        </div>

        <div class="block">
            <div class="header">Address - P2PKH</div>
            <div class="content">
                {{ addr_p2pkh }}
            </div>
        </div>

        <div class="block">
            <div class="header">Private Key (WIF)</div>
            <div class="content">
                {{ privateKeyUc }}
            </div>
        </div>

        <div class="block">
            <button class="btn" @click="generate">GENERATE</button>
        </div>

        <div style="height: 50px;"></div>

        <div class="block">
            <div class="header-small">Private Key C</div>
            <div class="content-small">
                {{ privateKeyC }}
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
                {{ addr_p2pkh_hex }}
            </div>
        </div>

        <div class="block">
            <div class="header-small">Address - P2SH</div>
            <div class="content-small">
                {{ addr_p2sh }}
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
    beforeMount() {
        this.generate()
    },
    methods: {
        async generate() {
            console.log("123");
            try {
                const response = await fetch('https://rusty.u00.io:8488/api/bitcoin/generate_keys',);
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
.block {}

.header {
    font-size: 24pt;
}

.content {
    margin-bottom: 10px;
    font-size: 14pt;
    overflow-wrap: break-word;
    font-family: monospace;
    min-height: 30pt;
}

.header-small {
    font-size: 16pt;
}

.content-small {
    font-size: 10pt;
    overflow-wrap: break-word;
    font-family: monospace;
}

.btn {
    background-color: green;
    color: white;
    width: 120px;
    height: 40px;
    border: 0px solid #ffffff;
}
</style>
