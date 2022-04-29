const app = new Vue({
  el: "#app",
  data: {
    email: "",
    emails: [],
  },
  methods: {
    // pushingEmails(email) {
    //   for (let i = 1; i <= 10; i++) {
    //     if (!this.emails.includes(email)) {
    //       this.emails.push(email);
    //     } else {
    //       return;
    //     }
    //   }
    // },
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        // console.log(this);
        // console.log(response);
        // console.log(this.email);
        this.email = response.data.response;

        for (let k = 0; k <= 10; k++) {
          if (this.email != this.emails) {
            this.emails.push(this.email);
          } else {
            return;
          }
        }

        console.log(this.emails);
      });
  },
});
