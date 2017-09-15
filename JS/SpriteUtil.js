var SpriteUtility = function()
{

    this.m_Initialized = false;

    this.m_ScaleX = 1;
    this.m_ScaleY = 1;
    this.m_PosX = 0;
    this.m_posY = 0;



    this.init = function()
    {

    }

// Sprite Sheet data
    this.SpriteSheet = function()
    {
        this.m_SpritePath = "";
        this.m_spritesheet = document.createElement("img");
        this.m_spritesheet.src = this.m_SpritePath; 
        this.m_TileWidth = 0;
        this.m_TileHeight = 0;
        this.m_Row = 0;
        this.m_Col = 0;

        this.m_Initialize = function(a_Filepath,a_Tilewidth,a_TileHeight,a_Rows,a_Columns)
        {
            
        }
    }


// SpriteRender.frame class
    this.Frame = function()
    {
        this.m_TileWidth = 0;
        this.m_TileHeight = 0;
        this.m_Row = 0;
        this.m_Col = 0;

        this.createFrame = function()
        {

        }
    }

//SpriteRender.Anim class
    this.anim = function()
    {

        this.SetupAnim = function()
        {

        }
    }

    this.RenderSprite = function(DeltaTime,Frames)
    {
        try
        {
            context.drawImage(this.m_spritesheet,this.m_Row,this.m_Col,this.m_TileWidth,this.m_TileHeight,this.m_PosX,this.m_PosY,this.m_ScaleX,this.m_scaleY);
        }
        catch(err)
        {
            document.write("Render Sprite function has encountered an error. Please check variables.");
        }
    }

};