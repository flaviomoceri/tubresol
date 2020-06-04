import React, { useEffect } from "react";
import { useRouter } from "next/router";

import * as endpoints from "../controllers/endpoints";

const Verification = (props) => {
    const router = useRouter();

    useEffect(function() {
        async function verification() {
            const request = await endpoints.verification(props.id, props.token);
            const result = request.status == 204 ? "success" : "error";
            router.push("/?verifica=" + result);
        }

        verification();
    });

    return null;
}

export async function getServerSideProps(request) {
    return {
        props: {
            id: request.query.id || null,
            token: request.query.token || null,
        },
    };
}
 
export default Verification;