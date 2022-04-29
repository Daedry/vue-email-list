const app = new Vue({
  el: "#app",
  data: {
    email: "",
    emails: [],
  },
  methods: {
  },
  mounted() {
    for (let k = 1; k <= 10; k++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          // console.log(this);
          // console.log(response);
          // console.log(this.email);
          this.email = response.data.response;

          if (this.email[k] !== this.emails[k]) {
            this.emails.push(this.email);
          } else {
            return;
          }

        });
    }
    console.log(this.emails);
  },
});
