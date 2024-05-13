import { Link } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'

export default function ListingItem({listing}) {
  return (
    <div className=' bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden w-full sm:w-[300px] '>
      <Link to={`/listing/${listing._id}`}>
        <img src={listing.imageURLs[0] || ' data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA8wMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABOEAABAwMCAwQGBQYKBwkAAAABAgMEAAUREiEGMUETUWGBBxQiMnGRFUKhwdEjM1JicrEWNERUk5SV0uHwJCVDU3OCkhc2RVWForLC8f/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EACYRAAICAgEFAAEFAQAAAAAAAAABAhEDEiEEEzFBUQUUIjJhcaH/2gAMAwEAAhEDEQA/ANcolXImiSinQBQr0bJJfRIRijKQOVHqojk8qW2U4C05FIU2TvSskc6PVtXWwcMjqQe+mVVLVTKkZqsZEZRGMYpxtWNxjNApxRYp7smuGOaidiRS0shXurBpqjGRyoNDqfPI8WSkZxqplz9k042tQ2PKg8AeVKuHyPKSa4IhpsipHZnuNDsT3H5VVNGdpsjaaAbJ5VKDWKJR6V2x2iXkbQgJ+NKUnNFRE4oeRrSEqGN6IKo80pAST7VMBO3wFTjaaWhLY95WaM6U8hSbWVURKhScUomk5rgMMDNHopNGKIosJxQJxSdQ76BXQphsPNCkaqFGgWifvQIOMUsoI54ptWc1lTNFV5CCN+dLxttRDNHvXWNGhJB7qLFLCiKMb74rrCoqxGBSuypYbSd80pI08qXb4Mo/RhTPhSQz3VJIzR9kCNjTbk5QRH7JJHtECi7JA5HNShHzzpxMbFHdCa/0QQ2OlGW/CrAMDuo+w8KPcQNSvS14Uot4qaWfCkqaNduFKivWmmS3vyqxW1TSmj0FOpiNEEtjvxSNAHXNTCyrupPYnqKbdC6N+iGUUAmpnZjG4pJGOlFTO7YwAkc0mgcfoGnSfCkqJPWhY1ISEk7hIx30elI360W45Uk5ogtIM4pJoUKZCNhbUNqGKFEWwtqFHihXAstXFZ94HNEkDG9OFpfXejQ33152yo9JRbfIptjVyxSuwx1FKwQmmlA1O2/ZakkGWRnfBodmByFJwrvNGErJxk0yT9iuaXhCVJFGEZp5DR7s04Gj3UdkhabGUsDxp5tgd1PoaA76eSMfCklkBqNIZ8Kc7E91OA7csb0sajy3pdgtIaDPfQcS202VuqShA5qVsPnTN2ukW1MhclRK1fm2k7rWfAffyrkvG3GTj6+yWj1hwKGIbOShv9o43P8AnAzVscHL/CM2kdg7EEAjBB652ptbNc74J4yPZJaCXHI6dlxXNnGf2c8x4fu5Vv7ddo1zkyWoyHChhKFdqQMK1AnAHMEYwQetGScQKmEpmmy1VgoDoM/AU2pOdgk5+FBSZ1EMpwPdplSM9KsFN00tvFGx9mVymSeQppTJ7qsFIPSmVIVVIyEdMglukFup5apCmMU24uhALZpJRU1TQHSm1Ip1MRwIumi008U0gimUibiIxRYpRBzRYp7FpCcUdHiirrBSLzWDzFALSBypNFpPeK8ng9dWKLmdgMUMZoJTvTqUUU4oWViEoyafbbHdS0Njup5KMdKVz+HJMSlAHSlBFOBJ8flSgk91KM5MSlApidIRCiPSXCAhlBWonuAqalJ/yKw3pfuC4XCphshXrFxdEdCQMlQ5q+wY8xVIRuSRKUuDjkni++vSHn0XWY2lxalhsOYCQTnFXnDf8K7y365Ivk2HbU+/IWv3gOYT3/HlRW/hm32OKLtxg6lsA5Zgg5Kz3K7/AIDzNU1/4omcRudl2iYluSdLcVsjcdCrv+HIfadra8JEW2WXEfFynnVRLG44tKRpXOdWVqX+yT+/5DqbHgCH21hlyDkvGaQpaeZ9lJ++sfHbbSkDKfmK0HD/ABLIsVudYjxY8htbnantVK2OkD6pHdRSa5Jti/SA07bp9okQ3FMyCwpRWDuTlPOrXh66zeJba/HW1IiS28Az4znZoOORV5fV38qD0B/ihLF34hS1a7XFQQnQVBToODtqJIG3P5eFHfr/ACZ7H0XYIjkC0t5ACGyFuj7gfmevcA38CgcRI4qsiwp+5zHo6z+TlNOq0qHTPcfD7aozxDeTjN0mZ8H1Ve8O3+42dn1G5QXrhal+yppbZKkDwzsfgfLFSbzwS1KjG68KLXIiHdcQ57RrwGd/I7jxplNeGBpm09DFxkTbRcEy33XnGpAAU4sqOCnxroZAPfXmq0cRXfh9DgtUtcbtV4dAQDkjvBG1W49IHFKhn6Ze8m0fhSTxuUuB1Ljk74W88hTama5n6NOMrpcOIXYl8uJeYXGUpsuBKQlaSNuQ5g/ZXTTMi4/jUf8ApE/jUpKUXQeGNFs00WjTy5sRPOVH/pU/jTC7hBT70yP/AEyaFs7gQpqmlN0o3GATj1uPv3PJ/GpSmxTbAaK1TVNlFWC26YW3VFImyIUb0WipBRSdFPsLRH0UdPaKFHYFEzTRgU92fhSg14V5Vs9W4jaAe6pCBSkNeFSG2hQO2iNp5Vk/SbxAbFw06I69MyaewYIO6Mj2leQ5eJFbXswK89+km+fTvErxZXqiRMss+OD7SvM/uqmGG0hJS4M81dLmjGm5TB8JCqkJu1zPO5TP6wqoaUHoaeDR7q9CkZ2yxtbt9u09qBCnSVPPHbXJIAA5mtVIejcL4ZS+5er+B7zq8oj57v0Rt8T4DlhfbZWh1lS0OIOpKkHBB+IrXejiMm4Sbs6+kqWhLGDnqe0z+6latoVllbzIlK9cmxPWZSgAVLbDgT4DcYHl86vGnHQjWq1MIJ3COxB27s/4datG4rrdsWI61srL4GpKiDjTUyyRn1SVdtIfWNBwFrVjOayZ+uxYcnba5KY+nlkjt6KFcx5tpTzttjjTlXZpZGAO7V9+PLpUebOjW6K29fWopfdGtiBGbGT1GT9Ycu4d+eQ3NwipMN8KydSFDme6ubM8ORzemZbiCVhspyVk7AbCr4cqzR2iSnDR0wo8y6XmQmRIYIUPzbCVAtoHwKCSfH5YGBWhbVcEo1+rlKzv2YSnQPD3M486l2mKlqY1gnbPPPd8aqrezcxMdamy5IwrKQXVe7t40vVdVj6dLYfBgnm/iTddyxlbCi5zCdI0fD3M486qn13SI+ZDWlElI5bBHgCkJBI88+Od63jsbclK1DKs8ztVVdGgZ69zyHU93xoYOojmbSR2XE8auzB3W2WTi18sOFFp4hDYcIB9h/nv01cufP41zlbBYfcZKm1FtRSVIOUkg4yD3VpfSOkx+LkLaJSoQ0aVZO2SoVnmWsDAAwO6tEXTEqwgnH+FBQ251I7Lw+yiU14VVCNEFxKe8VGW2P0R8qsHEEZ57eFNswpUxxaIsZ15aEFa0to1FKR1OKIpASnSsKSNKgcggcj316N4Iu/0/wAOQ5mR2ujs3gei07H8a866STlO+2elb30R32VAnyrcxFXIblaFNoBACXNQBO/6pOf2RUs9a2NjfNHay2cb48qYW3VkppPSmVtCsimUcSuLVI7PepchTMZtTj7iG2081LVgCqCfxNGbZUuE32yAfz7iuyZH/MefkDReQ5Y7LPQKFc8f4/UHVBN3hhOdg3AW4nyV1oUe5/Q3ZOqBNLSBSwiloQD8KxWaAIAp9OMcxSUtAct6Xp5ZArrDRk/SVflWThh8xVaZkv8AIMkc0595Q+Cc+eK4EhCQAACABgVsfSbe/pniRxtleY0LLDfcVA+2fmMeVZZGT4+NejghrEhOXIlCB3D5U8lHgn5UaRvTiU/qj5VeiNkdwJ66a23onRly9HGRiP0z/vax6kjUBpFS4FwuFr7VVtluRFO6e0LQT7eM4zkHvNDXkLfB21lkqiFKUEqDucBPTFSregsu5WlSRg748a4ceJuIwdr3L+SP7tIVxNxIf/HJQHwT/drDm/H482TuSfJXH1E4R0Xg79LWhcdaQSTg/VNZVtj/AElGRuAenh8K5UeKOIgMfTEk+SP7tOQeLr7EkpedmqlpAI7F5KdJz12ArRhwrEtUSnJzlbOxwEf6UjmefTw+FQyl9V0cWWV6SlIBKT3Vz5PpFuoUFCDFB78mnR6SbwR/FY3+fKs/WdH+pceaor0+bs26s608+sLKAw4faxnBqLcEkzCd+Q2Ga5iPSPef5vF+X+FF/wBoF2OSYkMqPMlBpek6KeBtuV3/AMBmy9xJVRWelNvHFDZx/JUDf4qrOMpwKtuIZ718k+vzENJdQ0EYaGBgZP31XsJBBweXhW5LkT0KA2/xolJ26fOnSAE5zW24b4HSWBdOIgtmIkakxwDrdHiOYB7uZ8KdvVWKzN8N8KzuIXtTQTHhpP5SSpOQPh3n7K2qVsWKC1H4RisKbKgp6Y8Ce3wcHBHP48h0BqFxC/erzGECBapUGzowkMIaKS6nuVjkP1fnVna5T9vtMOC5YLgox0aNSG8CktyOoz9/4atvE7shy0BEG+IGt+Gs7Lz1x49486y8UTbAOzWkomw3kKGxTpOdWD39d60d8tVwunEKrsxb7jCcQElt1CCFJ0pIxkd5Pwxzpi7XqRdPVDcIxCkrLYkhICVJxvnpncHHjWDqczX7Dl9O02eczdbXFnx1hTchsLTjpmpSkVgvRXLVF9bsL8piQELMiK6ysKCkK3UnbkoHfHj4V0Mp25UsnRoStFNdbLDunZmUykuNHLbulJUj4agRXMPSBwrBh3SKp2TOkGQy6QHni5pUCnGnPIb9MV2XFc/9KLK3Z9mCerb4+1ulTK41zTMSiJaGgULsiHSCfbU5gkZ22FCicjOlZKe0I76FUuRbVHZp8kRIjjpW2hWk6C4CU6sbZx0rIX7iKU3LVFZYD76IzriEuKIBKc5TgDY7HnvVzfXmWmS7ce1REZQXFqKglCuhBOR39ftrht/uK/pxT7SkOxlBbcYoUfaQoEBR+fI88VJ4RFJHeeHOIm7qUH8olMgKcY1tFOQCAd/iflT/ABnOl2/h2U5AyZrieyY7gtW2c+AyfKudeiSfJeVGbeVIebSHCoqJLbKEgBIAzzJ+A5110JJU3vyXy8jQhFxYsmecVcNXUL0FMRK8e6uYgHHmaea4Vux6QvOY3+NdLv8Aa2ZnpDQ6+w25iPpOpIO2g/fXPbhfrpCuMiNFtsF5DSykEspB516O8kkZWk2Kb4Ru5/mX9bR+NPjhC6D60D+topEXiK7LeActcFCCD7XYpODTrvEN2StQbtcJaRjCuxTvTLLL4K4odi8GSnHj69LiRmgnOtLyXN8jbANKlcMW6K+th69KDiDghMF1fyxzorNebrPuceLOtMNlhxQBV2aTuTy+VdRasfaLDsZlOnVvlXSkllkvIyimcqPDtvHO5TT8LS/+FJ/g/bf/ADCcf/SX/wAK1nF97vNrvb0aAptTSUghKkgkEjvqpc4i4qS+wjs2uyUT2jhSgaRgbgZz4U28krsFL0U5sFrHOfO/sp78KL+D1rP8uuB+Fre/u1YP8VcWIfcQ0y0ttKgEuaEjUNPPGe/an4XE3EjrWqUptleB7PZpI5b7g99dvI6kVP8AB22fz65f2Y7+FKTw9ax/K7n/AGY7+FWTXEvFDgXlTaSAcfkwcnJwPMAHzom+JOLF29x3S0mUCdDJSn2h03pe5IOpCTw9a/5zdP7Nc/Cl/wAHrSkalTLihPeq3rH3U+viXjJHaAR0FQUsI9wAge7k56iug2GPOu9gjPyOzckFRLm4xnPKleRpW2HU5q/aLGhKmzdJqVLQdGYCzn5CorVht6E73aTy3/1W9+FdDv8AJcs1wjw2IDkp+QlRShnRqwnn7xFRol4XInogSbfKivLYU+jtC2QUpx+jnB3rzs3X9RCT1jaNUOmxyXLKe0MWPhqIq5yW5VwkJ0qjFUVYbyRkb4IBz3nIq8mTpDShLvcxiGtRw2XF9mlJ/VyRk0i4B1cNuVGdW2pXZ+02rSSNYyDjnSvSlAEyFBaI1aH1Y28Kr0fWy6jG5uPKEzdOoTST8ktm8NuoC492iLcVvlLoUk/AaqccnLQ3j6QQjOyitwnI8z9tUtstDUSBEQtv2iyDnURjnV9HaaZhr1NB0HO2xP2152T844Zni08F1+PjpvZQX65NvxUJTOCyl4JUA7qJBGM+9yyRyrFSllbYaQ+UJSCtKXHT7BPvfbmtLf2lOpbeEVbCFkNKJRhQPd3Z/Css7BaStkrUoPFwlZTgnHPKR/neh33mns/ZjnjUeEWnBTd3bmKjwbb63FdSlT/YDSptSThKgokDv65+VditLktmE4q7rbbDatKXFrAJA6qPKsXwdDtCZz0lxtMZLbaVxUPEHU0nOTjcA5GcitLe0WK5RYrs+XGaJUXWCtScrGDkAHnzr0YyqFM6CXkZufGtlhFSW31S3B9SOM58zgfLNc/4u41enyY+bSuOWkKLJdcOVZIz0wfdH20OLnp0PiaFbLRcAzFkMFYXGCBqKd+YT4jrVDxAyUTHUMTpU5O2hx91ThHsgqAz0yTsKpjVsebcVaIS+JJwUR6q2PBLaiPnmhVQS6g6UI1AddaU58iaFadDN3p/To/EXELNxt60ybhcvUUkBYEVCA6sHYZyTjbljfFcymsw27ewWnnHJQSQtKUnSB8a6NKsz8/hTsISEKkeskgLWUgYUrO9Ukvg6568GOzpQ2s5L5yEp3PTnypsmi4KwlKio4TkXeK4lEGYWYjq9TjYewF4Sd8D4eFW8S+XqKl5qFcURlv6S84H85WMb75O+4JqXE4OuMWSwpaI40pVqBlqzqwRgADxFRTwtOjNEutMBa9SM+tLPTb6u3Ksy7andhext+DGpCnIrk2SJUjS4VPB0uBXPqaw1wSPpud/x1j7a33AsVcJiGw6EBSELyEuFY69TzrAT1ZvM47/AMZc5ftGtqdvgj4ux5KR3CnAkY937RTKVfrfOlBX6wqiQjZY2bH0zBAA/Po7u+uvNuFCEIAUTqxkJPf4GuO2Jf8Ar6B/x09fGri9cSXaNdpcdmaptDa1FOpCdJGeh61DPDakymKQ9xyrHFUkH9FHPuxQ1oUynYZwKrr48uRcWn3jqccisKWe8lFPNH8kN6LhcUNGXLGltpzyFI0J/RHyp8jJotNOkLJoQlCe4fZUuMlO3sj5UylPjT7Qx1pZKwxdDVwHtgBvG3cK23C61fwWiqSpaVFxe6E5xuaw8vddHc7zcLVabemDJWyktLJ0oz7Ws8z0qWSCcKYyl+4f9KNxetUuzyIygp5LTidTqNXPwql4BuUi68UtqkhBDcF1GUICcDKfwqk41ukuexAM2SXlJKsHKTjvG33gU56L31p4qCRyVFcPPuIpZYY9h8coTZvqEn4OqOx0NWpiOjJSnswCefvCrLiZkPBgKAwlwnf4VW3JZEb3znWMHHL5VU26dNlux0y5Tro9XKiFdTrIz8qw9Fh0hKP9m7O/3Rfwj8U8U262dlESpT8ttn2mUDGM6t8nbyBprhzj2DcFsw1IcYkOK0oQrcLV8ag8WcGP3qUZrMpkKSjAbdY8D9YH7vGk2H0dRbdLjS3prrrzRC9GgBJP78edQz/isWVyft+ykepkkl6NBfmAIP0gj8oA6Q8lJBx7Jxkff051mH0JXObcDHaqCgQhXMp7sd1bySjt0BC8BOQVJSNIUfHvqkukBhiHIl+0sx0a05SFqA32A6/bS4fx08SSvwZss922UshMuXJEN0CHEkNq/wBKkskJ0gjKUk8gByxnpVs1GtCmitVwZlJDRj63lL5fqjBGDtuMdaooLEq7SEynHpEnsVpSEvnB5HKR0HLltXS2Ux1pUVQmUHb2SgHGwrRprKUZCxVRs5de2Wm+M+G0xnEBCW15LedJwBnGd6evaY0mI2pABUh1SlrB3OOQBztyOakcZdi36RuHQltCAUK9kDA51B4hhFl50jJSpQcCD9YdRjvHPzrXjkuGCabjwZsxG3CVJbQAehKfxo6ry8EqIAIGeWoUK07oxaM2DXFyocCCHJjcb1tBcJRHWsoKs5+O/KpsuBdJaI5YmPSi4hzHbr7JIBABwAMkYPI1j7tapzzEGJIkxELiJ7NrQ61kjxwrn41etcJcWyYsdSIza2QgFtXriOXw19azKsnNm6M0uEVdnu81jiRiC82htcVzK31Eq2B3V49w+Na1fE8xUlCG3jJOrKWwzuTg431cvKp1h9G6nAh3iGaoL2zHjsHHmvG/liuhWe0WS1tobhxmUKT1DZyT55Nc4RXkPcZi4d1mQ7qwm52mU2+pvKgktnY/Wxqzy6YzXOZ/bG7TVhv3pDhGFp5ajj61dg4gjSXOIxJZQCwGsajj2TjlgnNc7lcPXpMt9wQGilxxSkkuJGcn41qh/FUQdWUQU/ndo/8AUn8aVrf/ANwv5j8a0Ee03yKne3NAq6kpP7zQiWi7vyF4ggIHMgg/fzqlsTWJX8PmV9NQ3vVH1JbdC1aRnb51FvE6W7fJrrcZ5thbmoIc0laCTvyVjPma2NqtV39cZPqrcdlDqVKbU4CrHfsaVIsc03KXIftRcKnSU6SjBT0O6gc1nyzaLY4IoLq4p2TFWhpWDDYBB2IITuP/AM2o0doUZ0AY71VbXq0zXpTRahOBDbCM6QD05bE1FatTjpwEuBR5JIIqilaF1SZC7Q490/Okh7BxpVkdcGp5tj6VYLCsjvGadNpkloHQR37CmTYGkQULUsDSM/8AN/jS+2wdwfnUgWxaUjStYcB2SMb0hVvmDfK8+ODXHKiO46onZpXnTfEiu1sltCI7y3EIWQUpGke2eZJ8elT0Wq6rd9lLgGNlbb+VXblklzLTFQ6wsvIQrIwNvaPiRjyqGWdIrjgmzn7VvYuUZtU6NKZZZJSjDntEnwAVirnhu2W61XZMq3h1TobUnD7qgnScZ5tjfbvrR3GwmDasxZLy5GxW2GsKJ66fD51lyxcpCiTBnLPeGgR++vOydRNvVDy1g1waWXeCUoQsxE6Fg49aznHlVEjimFDmAPOICmmy2cqOFkqJyMJNVzkWY2Tm2zxjf8ykb/8AVSVsy1D2rfLJ8W07fbXY88oegTy7+i5u3G0BFteTFcQt5bR0aO0JBPedGB86djekG0OMtqedbbdKcqbKXiQfJo1SMpfQQDbHSD3spV99TGnHgP8Au+pR7jEQPvqv6h/BN/6Jy+PrSHNKnWcEZyO2x8PzWai3TjKHKs1w9VKHQhtvWEhwe84kY9pA6FXLupt+5IiAKk2Mt6jgIdbbOfLO1RpF/tS2kBNpYYJeSSAEjX7Dg/S6Eg0H1DfB2y+FE9e/VEtrtziHdWNbakLyCPHGKkt8f31KVBCEAddjtVrGnR5eExLZIcP6KC39ntVMDTwwV2OYMj2dXZ/LnU8mSE+ZR5/0nuzJSuMJkua3KkR2FyGDlp5TQJTv0NTn+N3Z6A1KgsKOR7aULCsdckbVdrYUsFRscgYwNktn9yqbMNDoDarPL17jdLeB/wC+jDqYRVUFZGvRipJirkOKS4rSVEjBoVsTw5A62R/zcSP3KoVX9ZH4JZs4drTDSEQpDsYAf7JDY/8ArUk+uk6fpWaAQORQD/8AGhQrVfBQkx5U5v2fpCSoJOAVlJ+6jkyJklwdpNfGP0dI+6hQp4gI7kuV7KfWXMDbp+FRm22+1U92SO1H1ikZoUKePgDFuRm3kaF50r5gYFIchIdYDCnnw0PqpcI+3nQoVVJAG4dtYi5WyXApJ2Oqg5a463lS3O0W6s5UVKyD5UKFZc3DLQH5DIeUEKccAQAE6Dpx8qYEbs14S/I323dNHQpoLgEvIxKgNrebKnXyVc/ypol2yMk8ln9pZNChVESYpqOy1shtI5jPWkG3xlbdmRkdFGjoU1IYQiGyMpIKko5BRzUlMhSmg2UI0thQTgYI3o6FZsyVD427IwZQH25CC4h3PNLisH4jOKfDCnVKxJktJ140tPKSB8AKFChpHjg6TY03D7TCVS5uMfzlf40sWplokofl5B5mQs/fQoU7xwrwKPNWllY3fl7A8n1daSu0tMOnRImHGDvJX186FCl7cfhxHm2WLJCEPuS1pAyMyV7fbUduyRY+zDklHweUf30KFcoRvwcvIv1EFBCpUw42yJCht5UGrayhJw9L685Lh++hQpu3BrwAfRBQo/nZICQTjt1fjTEizx1+89L/AKyv8aFChHHD4cNjh6IP9tM/rKqOhQo9uHwJ/9k=' }  alt="Image not uploaded " className=' h-[300px] sm:h-[200px] w-full object-cover hover:scale-105 transition-scale duration-300 ' />
        <div className=" p-3 flex flex-col gap-2 w-full mt-5">
            <p className=' text-lg font-semibold text-slate-700 truncate '>{listing.name}</p>
            <div className=" flex items-center gap-1">
                <MdLocationOn className=' h-4 w-4 text-green-700' />
                <p className=' text-sm text-gray-600 truncate w-full'> {listing.address} </p>
            </div>
            <p className=' text-sm text-gray-800 line-clamp-2'>{listing.description}</p>
            <p className=' text-slate-500 mt-2 font-semibold'>
                ₹{listing.offer ? listing.discountPrice.toLocaleString('en-IN') : listing.regularPrice.toLocaleString('en-IN')}
                {listing.type === 'rent' && ' / month'}
            </p>
            <div className=" text-slate-700 flex gap-4">
                <div className=" font-bold text-xs">
                    <p>
                        {listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed` 
                        }
                    </p>
                </div>
                <div className=" font-bold text-xs">
                    <p>
                        {listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath` 
                        }
                    </p>
                </div>
            </div>

        </div>
      </Link>
    </div>
  )
}