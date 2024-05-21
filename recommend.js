export default () => {
  return {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '戲劇表演',
              size: 'xxl',
              color: '#ffffff',
              weight: 'bold',
              align: 'center'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '現代戲劇',
                data: 'modern drama'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '戲曲',
                data: ' drama'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '音樂劇',
                data: ' musical'
              }
            }
          ]
        },
        styles: {
          header: {
            backgroundColor: '#00B900'
          }
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '聲樂演出',
              size: 'xxl',
              color: '#ffffff',
              weight: 'bold',
              align: 'center'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '合唱',
                data: 'chorus'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '獨唱',
                data: 'soli'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '歌劇',
                data: ' opera'
              }
            }
          ]
        },
        styles: {
          header: {
            backgroundColor: '#00B900'
          }
        }
      },
      {
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '樂團演出',
              size: 'xxl',
              color: '#ffffff',
              weight: 'bold',
              align: 'center'
            }
          ]
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '管絃樂團',
                data: 'Orchestra'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '室內樂',
                data: 'chamber music'
              }
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '國樂',
                data: 'Chinese traditional music'
              }
            }
          ]
        },
        styles: {
          header: {
            backgroundColor: '#00B900'
          }
        }
      }
    ]
  }
}
