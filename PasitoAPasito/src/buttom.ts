import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
    name: 'Pausar Video',
    schema: {
        videoEntity: ecs.eid,
},
stateMachine: ({world, eid, schemaAttribute}) => {
    ecs.defineState('initial-state')
        .initial()
        .listen(eid, ecs.input.UI_CLICK, () => {
              console.log('Botón presionado')
            const {videoEntity} = schemaAttribute.get(eid)
        

        if (!videoEntity) return

        ecs.VideoControls.mutate(world, videoEntity, (cursor) => {
            cursor.paused = true
            return false
        })
    })
},
})