import {createStore} from 'vuex'
import grades from '@/store/modules/grades'
import grade from "@/store/modules/grade";
import settings from "@/store/modules/settings";

const store = createStore({
        modules: {grades, grade, settings}
    }
)
export default store
