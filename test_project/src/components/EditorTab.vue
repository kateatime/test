<template>
    <div>
        <h2>EDITOR</h2>
        <AddItem/>
        <AllItems/>
    </div>
</template>

<script>

import AddItem from '@/components/AddItem' 
import AllItems from '@/components/AllItems' 
export default {
     components: {
    AddItem, AllItems
  },
  
    
}
</script>