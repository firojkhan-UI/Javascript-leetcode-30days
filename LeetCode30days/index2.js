var isValid = function(A) {

    let st = []
       for (let i = 0; i < A.length; i++) {
           if (A[i] === "{" || A[i] === "(" || A[i] === "[") {
               st.push(A[i])
           }

           else if (A[i] === "]") {
               if (st[st.length - 1] === "[") {
                   st.pop(st.length - 1)
               }
               else return 0
           }

           else if (A[i] === ")") {
               if (st[st.length - 1] === "(") {
                   st.pop(st.length - 1)
               }
               else return 0
           }

           else if (A[i] === "}") {
               if (st[st.length - 1] === "{")
                   st.pop(st.length - 1)
                   else return 0
           }
       }
       if(st.length > 0) {
           return 0
       }
       else {
           return 1
       }
};